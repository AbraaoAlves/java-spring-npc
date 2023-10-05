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
    id INTEGER NOT NULL,
    created_at timestamp(6) without time zone,
    email character varying(255),
    name character varying(255),
    password character varying(255),
    updated_at timestamp(6) without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, created_at, email, name, password, updated_at) FROM stdin;
1	2023-09-28 00:37:01.009727	fernanda@mail.com	fernanda	123	2023-09-28 00:37:01.009893
2	2023-09-28 00:37:07.926237	kilvia@mail.com	kilvia	123	2023-09-28 00:37:07.926261
3	2023-09-28 00:37:17.980945	neydymar@mail.com	neydymar	123	2023-09-28 00:37:17.980965
4	2023-09-28 00:37:36.91722	mail@mail.com	abraao	123	2023-09-28 00:37:36.917257
\.

--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

