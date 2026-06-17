import { useEffect, useState } from "react";
import { loginAPI } from "../services/loginAPI";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

export default function LoginList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await loginAPI.fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (dataForm.password !== dataForm.confirmPassword) {
      setError("Password dan Confirm Password tidak sama");
      setLoading(false);
      return;
    }

    try {
      await loginAPI.createUser({
        email: dataForm.email,
        password: dataForm.password,
      });

      setSuccess("User berhasil ditambahkan!");
      setDataForm({ email: "", password: "", confirmPassword: "" });
      setTimeout(() => setSuccess(""), 3000);

      await loadUsers();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (user) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus user ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await loginAPI.deleteUser(user);

      setSuccess("User berhasil dihapus");
      setTimeout(() => setSuccess(""), 3000);

      await loadUsers();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Login User Management</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tambah User Baru</h3>

        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={dataForm.email}
            placeholder="Email user"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <input
            type="password"
            name="password"
            value={dataForm.password}
            placeholder="Password"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <input
            type="password"
            name="confirmPassword"
            value={dataForm.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
          >
            {loading ? "Mohon tunggu..." : "Tambah User"}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">Daftar User ({users.length})</h3>
        </div>

        {loading ? (
          <LoadingSpinner text="Memuat user..." />
        ) : error ? (
          <EmptyState text="Terjadi kesalahan. Coba lagi nanti." />
        ) : users.length === 0 ? (
          <EmptyState text="Belum ada user. Tambah user pertama!" />
        ) : (
          <GenericTable
            columns={["#", "Email", "Aksi"]}
            data={users}
            renderRow={(user, index) => (
              <>
                <td className="px-6 py-4 font-medium text-gray-700">{index + 1}.</td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-emerald-600">{user.email}</div>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user)}
                    disabled={loading}
                    className="text-red-600 hover:text-red-800"
                  >
                    Hapus
                  </button>
                </td>
              </>
            )}
          />
        )}
      </div>
    </div>
  );
}
