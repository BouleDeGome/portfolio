document.addEventListener('DOMContentLoaded', () => {
    // Get the project ID from the URL (e.g., projet.html?id=r3st0)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId || !window.projectsData || !window.projectsData[projectId]) {
        // Redirect to home if project not found
        window.location.href = 'index.html#projects';
        return;
    }

    const project = window.projectsData[projectId];

    // Update Title & Category
    document.title = `Projet - ${project.title} | Milan LELIEVRE`;
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;

    // Update Tags
    const tagsContainer = document.getElementById('project-tags');
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700 text-sm font-mono';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Update Documents
    const docsContainer = document.getElementById('project-docs');
    if (project.docLink && project.docLink !== '#') {
        docsContainer.innerHTML = `
            <a href="${project.docLink}" target="_blank" class="flex items-center gap-3 p-4 bg-slate-900 rounded-lg border border-cyan-900/40 hover:border-cyan-500/60 transition-all group">
                <div class="bg-cyan-600/20 p-2 rounded-lg group-hover:bg-cyan-600/30 transition-colors">
                    <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </div>
                <div>
                    <h4 class="text-white font-bold group-hover:text-cyan-400 transition-colors">${project.docType || 'Documentation'}</h4>
                    <span class="text-sm text-slate-400">Consulter les ressources</span>
                </div>
            </a>
        `;
    } else {
        docsContainer.innerHTML = `<p class="text-slate-400 italic">Aucune documentation publique disponible.</p>`;
    }

    // Update Schemas
    const schemasContainer = document.getElementById('project-schemas');
    const schemasSection = document.getElementById('schemas-section');

    if (project.schemas && project.schemas.length > 0) {
        schemasSection.style.display = 'block';
        project.schemas.forEach(schemaPath => {
            const wrapper = document.createElement('div');
            wrapper.className = 'rounded-lg overflow-hidden border border-cyan-900/40 hover:border-cyan-500/50 transition-all shadow-lg';

            const img = document.createElement('img');
            img.src = schemaPath;
            img.alt = `Schéma réseau de ${project.title}`;
            img.className = 'w-full h-auto object-cover';

            wrapper.appendChild(img);
            schemasContainer.appendChild(wrapper);
        });
    } else {
        schemasSection.style.display = 'none';
    }

    // Update Demo Link
    const demoLink = document.getElementById('project-demo-btn');
    if (project.demoLink && project.demoLink !== '#') {
        demoLink.href = project.demoLink;
        demoLink.style.display = 'inline-flex';
    } else {
        demoLink.style.display = 'none';
    }
});
