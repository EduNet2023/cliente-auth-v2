import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gfvyskhitupcsbvmeyhf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmdnlza2hpdHVwY3Nidm1leWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NTM5NDUsImV4cCI6MjA2NDUyOTk0NX0.MBeZJQttItXz3-NCpupmwvGxUq0VxRZT7YouFcxwaJY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);