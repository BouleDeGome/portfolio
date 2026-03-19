function openProjectModal(projectId) {
    if (!window.projectsData || !window.projectsData[projectId]) return;

    const project = window.projectsData[projectId];
    const modal = document.getElementById('project-modal');

    // Populate data
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-description').textContent = project.description;

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    if (project.tags) {
        project.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'px-3 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700 text-sm font-mono';
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });
    }

    // DOM Elements
    const filesContainer = document.getElementById('modal-files');
    const schemasContainer = document.getElementById('modal-schemas');
    const filesTitle = filesContainer.previousElementSibling;
    const schemasTitle = schemasContainer.previousElementSibling;

    filesContainer.innerHTML = '';
    schemasContainer.innerHTML = '';

    if (projectId === 'portfolio') {
        const gridContainer = filesContainer.closest('.grid');
        if (gridContainer) {
            gridContainer.classList.remove('md:grid-cols-2');
            gridContainer.lastElementChild.classList.add('hidden');
        }

        // Special Layout for Portfolio
        filesTitle.innerHTML = '<span class="text-cyan-400 font-mono">// </span>Code Source';
        filesContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center min-h-[150px] gap-6 text-center mt-2 w-full">
                <p class="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
                    Le code source de ce portfolio est hébergé et accessible publiquement. N'hésitez pas à consulter l'ensemble du projet directement sur mon profil GitHub !
                </p>
                <a href="${project.docLink}" target="_blank" class="glow-btn magnetic-btn flex items-center justify-center gap-3 w-full max-w-md py-4 rounded-xl font-mono text-white tracking-wide shadow-lg shadow-cyan-900/20 hover:scale-[1.02] transition-transform text-lg">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    Voir sur GitHub
                </a>
            </div>
        `;
    } else if (projectId === 'ch') {
        const gridContainer = filesContainer.closest('.grid');
        if (gridContainer) {
            gridContainer.classList.remove('md:grid-cols-2');
            gridContainer.lastElementChild.classList.add('hidden');
        }

        filesTitle.innerHTML = '<span class="text-cyan-400 font-mono">// </span>Rapport de Stage';
        filesContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center min-h-[150px] gap-6 text-center mt-2 w-full">
                <p class="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
                    Découvrez en détail l'ensemble des missions, de l'infrastructure et des compétences développées lors de ce stage professionnel en centre hospitalier.
                </p>
                <!-- Find the documentation URL within the projectsData -->
                <a href="${project.files.find(f => f.name.includes('Documentation')).url}" target="_blank" class="glow-btn magnetic-btn flex items-center justify-center gap-3 w-full max-w-md py-4 rounded-xl font-mono text-white tracking-wide shadow-lg shadow-cyan-900/20 hover:scale-[1.02] transition-transform text-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Consulter le Rapport (.pdf)
                </a>
            </div>
        `;
    } else {
        const gridContainer = filesContainer.closest('.grid');
        if (gridContainer) {
            gridContainer.classList.add('md:grid-cols-2');
            if (gridContainer.lastElementChild) {
                gridContainer.lastElementChild.classList.remove('hidden');
            }
        }

        // Standard view for infrastructures
        let restrictedWarning = '';
        if (projectId === 'ZelionHost') {
            restrictedWarning = '<div class="mb-6 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-start gap-3"><svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg><span><strong>Accès restreint</strong> : La documentation technique de ce projet est réservée.</span></div>';
        }

        filesTitle.innerHTML = restrictedWarning + '<span class="text-cyan-400 font-mono">// </span>Fichiers';
        schemasTitle.innerHTML = '<span class="text-cyan-400 font-mono">// </span>Schéma Réseau';

        // Files
        if (project.files && project.files.length > 0) {
            project.files.forEach(file => {
                const li = document.createElement('li');
                li.className = 'flex items-center gap-2';
                li.innerHTML = `<span class="text-cyan-400">▹</span> <a href="${file.url}" target="_blank" class="hover:text-cyan-400 hover:underline transition-colors">${file.name}</a>`;
                filesContainer.appendChild(li);
            });
        } else {
            filesContainer.innerHTML = '<li class="text-slate-500 italic">Aucun fichier spécifié...</li>';
        }

        // Schemas
        if (project.schemas && project.schemas.length > 0) {
            project.schemas.forEach(schemaPath => {
                const img = document.createElement('img');
                img.src = schemaPath;
                img.alt = `Schéma réseau de ${project.title}`;
                img.className = 'w-full rounded-lg border border-cyan-900/50 object-cover';
                schemasContainer.appendChild(img);
            });
        } else {
            schemasContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center py-8 text-slate-500 border-2 border-dashed border-slate-700/50 rounded-lg bg-slate-800/30">
                    <svg class="w-12 h-12 mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span class="text-sm">Schéma à venir...</span>
                </div>
            `;
        }
    }

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    }, 10);

    // Lock body scroll
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');

    // Wait for transition to finish
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        // Restore body scroll
        document.body.style.overflow = '';
    }, 300);
}

// Close on outside click or ESC key
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            // Close if clicking directly on the backdrop (not inside modal content)
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeProjectModal();
            }
        });
    }
});
