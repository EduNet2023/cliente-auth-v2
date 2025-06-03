import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin() {
    const { data: { user }, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      const { data, error: roleError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();
      if (roleError) {
        setError(roleError.message);
      } else {
        onLogin({ user, role: data.role });
      }
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}