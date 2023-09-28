--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Debian 16.0-1.pgdg110+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    created_at timestamp(6) without time zone,
    email character varying(255) NOT NULL,
    name character varying(255),
    password character varying(255),
    updated_at timestamp(6) without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, created_at, email, name, password, updated_at) FROM stdin;
f0d59053-e1e8-4ccc-ac6b-9f966ad50a53	2023-09-28 00:37:01.009727	fernanda@mail.com	fernanda	123	2023-09-28 00:37:01.009893
95a56600-cc63-4a0d-94dd-78d80e9b3d54	2023-09-28 00:37:07.926237	kilvia@mail.com	kilvia	123	2023-09-28 00:37:07.926261
c4947e5d-5e23-4b6f-bc7d-2a1b22f3900d	2023-09-28 00:37:17.980945	neydymar@mail.com	neydymar	123	2023-09-28 00:37:17.980965
0f7aa303-46a6-4e71-8394-0d924abb277a	2023-09-28 00:37:36.91722	mail@mail.com	abraao	123	2023-09-28 00:37:36.917257
\.


--
-- Name: users uk_6dotkott2kjsp8vw4d0m25fb7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT uk_6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

