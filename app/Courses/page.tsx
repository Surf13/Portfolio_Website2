
"use client";

import Link from "next/link";
import "./courses.css";
import { useState, useEffect } from "react";

export default function CoursesPage() {
  const filters = ["All", "ECEN", "CSCE", "MATH"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [showTranscript, setShowTranscript] = useState(false);
  const [shuffledCourses, setShuffledCourses] = useState(courses);

  useEffect(() => {
    // shuffle after component mounts
    const shuffled = [...courses];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledCourses(shuffled);
  }, []);

  const filteredCourses =
    activeFilter === "All"
      ? shuffledCourses
      : shuffledCourses.filter((c) =>
          c.tags?.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase())
  );

    return (
        <div className="courses-page">
        <h1 className="courses-heading">Courses</h1>

        {/* Transcript Toggle Button */}
        <div className="transcript-toggle">
            <button
                className={`filter-btn transcript-btn ${
                showTranscript ? "active" : ""
                }`}
                onClick={() => setShowTranscript(!showTranscript)}
            >
                {showTranscript ? "Hide Transcript" : "Show Transcript"}
            </button>
        </div>

        {/* Transcript Viewer */}
        {showTranscript && (
            <div className="transcript-viewer">
            <iframe
                src="/docs/transcript.pdf"
                width="100%"
                height="600px"
                title="Transcript PDF"
            ></iframe>
            </div>
        )}

        {/* Filter buttons */}
        <div className="courses-filters">
            {filters.map((filter) => (
            <button
                key={filter}
                className={`filter-btn ${
                activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
            >
                {filter}
            </button>
            ))}
        </div>

        {/* Course list */}
        <div className="courses-list">
            {filteredCourses.map((course) => (
            <Link
                key={course.title}
                href={course.page}
                className="course-panel"
            >
                <div className="course-content">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-desc">{course.description}</p>
                </div>
            </Link>
            ))}
        </div>
        </div>
    );
    }

//Do you ever Feel. Like there was a better Way. Like a Spreadsheet....
const courses = [
  {
    title: "MATH 470: Communications and Cryptography",
    description:
      "ntroduction to coded communications, digital signatures, secret sharing, one-way functions, authentication, error control and data compression.",
    page: "/courses/MATH/470",
    tags: ["MATH"],
  },
  {
    title: "Math 311: Topics in Applied Mathmatics I",
    description: "Systems of linear equations, matrices, determinants, vector spaces, linear transformations, eigenvalues and eigenvectors, diagonalization, inner product spaces, orthogonal functions; vector analysis, including gradient, divergence, curl, line and surface integrals, Gauss', Green's and Stokes' theorems.",
    page: "/courses/MATH/311",
    tags: ["MATH"],
  },
  {
    title: "MATH 308: Differential Equations",
    description: "Ordinary differential equations, solutions in series, solutions using Laplace transforms, systems of differential equations.",
    page: "/courses/MATH/308",
    tags: ["MATH"],
  },
  {
    title: "CSCE 221: Data Structures and Algorithmns",
    description: "Specification and implementation of basic abstract data types and their associated algorithms including stacks, queues, lists, sorting and selection, searching, graphs, and hashing; performance tradeoffs of different implementations and asymptotic analysis of running time and memory usage.",
    page: "/courses/CSCE/211",
    tags: ["CSCE"],
  },
  {
    title: "CSCE 222: Discrete Structures for Computing",
    description: "Mathematical foundations from discrete mathematics for analyzing computer algorithms, for both correctness and performance; introduction to models of computation, including finite state machines and Turing machines.",
    page: "/courses/CSCE/222",
    tags: ["CSCE"],
  },
  {
    title: "CSCE 313: Introduction to Computer Systems",
    description: "Introduction to system support for application programs, both on single node and over network including OS application interface, inter-process communication, introduction to system and network programming, and simple computer security concepts.",
    page: "/courses/CSCE/313",
    tags: ["CSCE"],
  },
  {
    title: "CSCE 350: Computure Architecture and Design",
    description: "Computer architecture and design; use of register transfer languages and simulation tools to describe and simulate computer operation; central processing unit organization, microprogramming, input/output and memory system architectures.",
    page: "/courses/CSCE/350",
    tags: ["CSCE"],
  },
  {
    title: "CSCE 331: Foundations of Software Engineering",
    description: "Intensive programming experience and provision of the fundamentals needed for larger-scale software development; integration of concepts in computer science and familiarization with a variety of programming and development tools and techniques; team projects each with an emphasis on a different specialization within computer science; emphasis on programming techniques to ease code integration and clarity; practical exposure to software-engineering processes through large-scale projects and specification and documentation.",
    page: "/courses/CSCE/331",
    tags: ["CSCE"],
  },
  {
    title: "CSCE 314: Programming Languages",
    description: "Exploration of the design space of programming languages via an in-depth study of two programming languages, one functional(Haskell) and one object-oriented (Java); focuses on idiomatic uses of each language and on features characteristic for each language.",
    page: "/courses/CSCE/314",
    tags: ["CSCE"],
  },
  {
    title: "CSCE 421: Machine Learning",
    description: "Theoretical foundations of machine learning, pattern recognition and generating predictive models and classifiers from data; includes methods for supervised and unsupervised learning (decision trees, linear discriminants, neural networks, Gaussian models, non-parametric models, clustering, dimensionality reduction, deep learning), optimization procedures and statistical inference.",
    page: "/courses/CSCE/421",
    tags: ["CSCE"],
  },
  {
    title: "CSCE 451: Software Reverse Engineering",
    description: "Overview of the compilation mechanism to generate executable files and raw binary codes from source codes; executable file formats for an operating system to run the binary code; disassembly algorithms and control graph analysis; static and dynamic analyses; case studies on code obfuscation, codebreaking, malware analysis.",
    page: "/courses/CSCE/451",
    tags: ["CSCE"],
  },
  {
    title: "ECEN 248: Introduction to Digital Systems Design",
    description: "Combinational and sequential digital system design techniques; design of practical digital systems.",
    page: "/courses/ECEN/248",
    tags: ["ECEN"],
  },
  {
    title: "ECEN 214: Electrical Circuit Theory",
    description: "Resistive circuits including circuit laws, network reduction, nodal analysis, mesh analysis; introduction to operational amplifiers; circuit analysis with inductors and capacitors; sinusoidal steady state circuit analysis; AC power calculations; magnetically coupled circuits; the ideal transformer; resonance; introduction to circuit simulation.",
    page: "/courses/ECEN/214",
    tags: ["ECEN"],
  },
  {
    title: "ECEN 314: Signals and Systems",
    description: " Introduction to the continuous-time and discrete-time signals and systems; time domain characterization of linear time-invariant systems; Fourier analysis; filtering; sampling; modulation techniques for communication systems.",
    page: "/courses/ECEN/314",
    tags: ["ECEN"],
  },
  {
    title: "ECEN 325: Electronics",
    description: "Electronic systems; linear circuits; operational amplifiers and applications; diodes, field effect transistors, bipolar transistors; amplifiers and nonlinear circuits.",
    page: "/courses/ECEN/325",
    tags: ["ECEN"],
  },
  {
    title: "ECEN 420: Linear Control Systems",
    description: "Application of state variable and frequency domain techniques to modeling, analysis and synthesis of single input, single output linear control systems.",
    page: "/courses/ECEN/420",
    tags: ["ECEN"],
  },
  {
    title: "ECEN 449: Microprocessor System Design",
    description: " Introduction to microprocessors; 16/32 bit single board computer hardware and software designs; chip select equations for memory board design, serial and parallel I/O interfacing; ROM, static and dynamic RAM circuits for no wait-state design; assembly language programming, stack models, subroutines and I/O processing.",
    page: "/courses/ECEN/449",
    tags: ["ECEN"],
  },
  {
    title: "ECEN 454: Digial Integrated Circuit Design",
    description: "Analysis and design of digital devices and integrated circuits using MOS and bipolar technologies and computer aided simulation.",
    page: "/courses/ECEN/454",
    tags: ["ECEN"],
  },
  {
    title: "ECEN 403: Electrical Design Laboratory I (Capstone)",
    description: "Application of design process and project engineering as practiced in industry; team approach to the design process; development of a project proposal; documentation of the proposal, implementation and project; development of execution and validation plan.",
    page: "/courses/ECEN/403",
    tags: ["ECEN"],
  },
];
