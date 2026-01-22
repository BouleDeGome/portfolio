// Node.js Plans Data
const nodejsPlans = [
    {
        name: 'Node.js Starter',
        price: '7.99',
        ram: '512 MB RAM',
        cpu: '1 vCore',
        storage: '10 GB SSD',
        bandwidth: '100 GB',
        features: [
            'Node.js 18/20/21',
            'NPM & Yarn',
            'Git Deployment',
            'SSL gratuit',
            'PM2 Process Manager',
            'Accès SSH',
            'Support 24/7'
        ]
    },
    {
        name: 'Node.js Pro',
        price: '14.99',
        ram: '1 GB RAM',
        cpu: '2 vCores',
        storage: '25 GB SSD',
        bandwidth: '250 GB',
        features: [
            'Node.js 18/20/21',
            'NPM & Yarn',
            'Git Deployment',
            'SSL gratuit',
            'PM2 Advanced',
            'MongoDB inclus',
            'Accès SSH',
            'Support prioritaire',
            'Backups quotidiens'
        ],
        popular: true
    },
    {
        name: 'Node.js Business',
        price: '29.99',
        ram: '2 GB RAM',
        cpu: '4 vCores',
        storage: '50 GB SSD',
        bandwidth: '500 GB',
        features: [
            'Node.js 18/20/21',
            'NPM & Yarn & PNPM',
            'Git Deployment',
            'SSL gratuit',
            'PM2 inclus',
            'MongoDB + Redis',
            'PostgreSQL inclus',
            'Accès SSH complet',
            'Support prioritaire',
            'Sauvegardes fréquentes'
        ]
    }
];

function renderPlans() {
    const container = document.getElementById('plans-container');
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-3 gap-8">';
    
    nodejsPlans.forEach((plan, index) => {
        const popularClass = plan.popular 
            ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-2xl ring-4 ring-green-400'
            : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700';
        
        html += `
            <div class="relative p-8 rounded-2xl ${popularClass} plan-card animate-fade-in" style="animation-delay: ${index * 0.1}s;">
                ${plan.popular ? `
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold popular-badge">
                        ⭐ Recommandé
                    </div>
                ` : ''}
                
                <h3 class="text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                    ${plan.name}
                </h3>
                
                <div class="mb-6">
                    <span class="text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                        ${plan.price}€
                    </span>
                    <span class="${plan.popular ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'}">
                        /mois
                    </span>
                </div>
                
                <div class="space-y-3 mb-6 pb-6 border-b ${plan.popular ? 'border-green-400' : 'border-gray-200 dark:border-gray-700'}">
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.cpu}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.ram}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.storage}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-green-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-green-100' : 'text-gray-700 dark:text-gray-300'}">${plan.bandwidth} Bande passante</span>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-8">
                    ${plan.features.map(feature => `
                        <li class="flex items-start space-x-2">
                            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-200' : 'text-green-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-sm ${plan.popular ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'}">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <a href="../order.html?service=nodejs&plan=${encodeURIComponent(plan.name)}&price=${plan.price}">
                    <button class="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                        plan.popular
                            ? 'bg-white text-green-600 hover:bg-gray-100'
                            : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90'
                    }">
                        Commander
                    </button>
                </a>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderPlans();
});
