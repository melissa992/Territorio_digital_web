import { useState } from "react";
import { LockKeyhole, LogIn, LogOut, X } from "lucide-react";
import { supabase } from "../lib/supabase";

function AdminModule({ session, onSessionChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!supabase) {
        throw new Error("Supabase no está configurado.");
      }

      const { data, error: authError } = await supabase.auth.signInWithPassword(credentials);
      if (authError) {
        throw authError;
      }

      onSessionChange(data.session);
      setCredentials({ email: "", password: "" });
      setIsOpen(false);
    } catch (authError) {
      setError(authError.message || "No se pudo iniciar sesión.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase?.auth.signOut();
    onSessionChange(null);
  };

  return (
    <>
      {session ? (
        <button
          type="button"
          onClick={handleLogout}
          className="login-button inline-flex items-center gap-2 rounded-full border border-white/70 bg-[#123b63]/90 px-5 py-3 text-base font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#0d2f50]"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setError("");
            setIsOpen(true);
          }}
          className="login-button inline-flex items-center gap-2 rounded-full border border-white/80 bg-[#123b63]/90 px-5 py-3 text-base font-bold text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#0d2f50]"
        >
          <LockKeyhole className="h-4 w-4" />
          Login admin
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#09243d]/70 px-4 py-6 backdrop-blur-md">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_28px_90px_rgba(3,25,44,0.35)]"
          >
            <div className="bg-[linear-gradient(120deg,#0f4c5c_0%,#1d5fb8_58%,#159a9c_100%)] px-6 py-7 text-white sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30">
                    <LockKeyhole className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">
                      Área protegida
                    </p>
                    <h2 className="mt-1 text-2xl font-black">
                      Login admin
                    </h2>
                  </div>
                </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white/15"
                aria-label="Cerrar acceso administrativo"
              >
                <X className="h-4 w-4" />
              </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-base leading-7 text-slate-600">
                Gestiona los registros y fotografías de la memoria comunitaria.
              </p>

              <div className="mt-6 grid gap-5">
                <label className="grid gap-2 text-base font-semibold text-slate-700">
                  Usuario admin
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(event) => setCredentials((prev) => ({ ...prev, email: event.target.value }))}
                  required
                  autoComplete="email"
                  placeholder="usuario admin"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-normal text-slate-900 outline-none transition focus:border-[#1d5fb8] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
                </label>
                <label className="grid gap-2 text-base font-semibold text-slate-700">
                  Contraseña admin
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))}
                  required
                  autoComplete="current-password"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-normal text-slate-900 outline-none transition focus:border-[#1d5fb8] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
                </label>
              </div>

              {error && (
                <p role="alert" className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-base text-red-700">
                {error}
                </p>
              )}

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="login-submit inline-flex min-w-[190px] items-center justify-center gap-2 rounded-2xl bg-[#1d5fb8] px-7 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-1 hover:bg-[#164c96] disabled:cursor-wait disabled:opacity-60"
              >
                <LogIn className="h-4 w-4" />
                {isLoading ? "Ingresando..." : "Entrar"}
              </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AdminModule;
