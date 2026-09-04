-- Ejecuta este script una sola vez en Supabase > SQL Editor.
-- Habilita las operaciones CRUD para el cliente público de la aplicación.

alter table public.saberes enable row level security;

drop policy if exists "Permitir lectura pública de saberes" on public.saberes;
drop policy if exists "Permitir inserción pública de saberes" on public.saberes;
drop policy if exists "Permitir actualización en la misma fila" on public.saberes;
drop policy if exists "Permitir actualización pública de saberes" on public.saberes;
drop policy if exists "Permitir eliminación por administración" on public.saberes;
drop policy if exists "Permitir eliminación pública de saberes" on public.saberes;

create policy "Permitir lectura pública de saberes"
on public.saberes for select
using (true);

create policy "Permitir inserción pública de saberes"
on public.saberes for insert
with check (true);

create policy "Permitir actualización pública de saberes"
on public.saberes for update
using (auth.uid() is not null)
with check (auth.uid() is not null);

create policy "Permitir eliminación pública de saberes"
on public.saberes for delete
using (auth.uid() is not null);

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

drop policy if exists "Permitir lectura pública de archivos de saberes" on storage.objects;
drop policy if exists "Permitir carga pública de archivos de saberes" on storage.objects;
drop policy if exists "Permitir actualización pública de archivos de saberes" on storage.objects;

create policy "Permitir lectura pública de archivos de saberes"
on storage.objects for select
using (bucket_id = 'media');

create policy "Permitir carga pública de archivos de saberes"
on storage.objects for insert
with check (bucket_id = 'media' and auth.uid() is not null);

create policy "Permitir actualización pública de archivos de saberes"
on storage.objects for update
using (bucket_id = 'media' and auth.uid() is not null)
with check (bucket_id = 'media' and auth.uid() is not null);