// Web Hosting Plans Data - Copie exacte du site React
const webPlans = [
    {
        name: 'Web Starter',
        price: '5.99',
        websites: '1 site web',
        storage: '10 GB SSD',
        bandwidth: '100 GB',
        databases: '1 base de données',
        features: [
            'PHP 8.2',
            'MySQL 8',
            'SSL gratuit',
            'WordPress ready',
            'cPanel',
            'Email professionnel',
            'Support 24/7'
        ]
    },
    {
        name: 'Web Plus',
        price: '9.99',
        websites: '5 sites web',
        storage: '30 GB SSD',
        bandwidth: '300 GB',
        databases: '5 bases de données',
        features: [
            'PHP 8.2',
            'MySQL 8 + PostgreSQL',
            'SSL gratuit',
            'WordPress optimisé',
            'cPanel + WHM',
            '10 emails pro',
            'Sauvegardes fréquentes',
            'Support prioritaire',
            'SSH Access',
            'Git integration'
        ],
        popular: true
    },
    {
        name: 'Web Business',
        price: '19.99',
        websites: 'Sites illimités',
        storage: '100 GB SSD',
        bandwidth: 'Illimité',
        databases: 'Illimité',
        features: [
            'PHP 8.2 + Node.js',
            'MySQL 8 + PostgreSQL',
            'SSL gratuit',
            'WordPress VIP',
            'cPanel + WHM',
            'Emails illimités',
            'Backups temps réel',
            'Support VIP 24/7',
            'CDN premium',
            'SSH Access',
            'Git integration'
        ]
    }
];

function renderPlans() {
    const container = document.getElementById('plans-container');
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-3 gap-8">';
    
    webPlans.forEach((plan, index) => {
        const popularClass = plan.popular 
            ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl ring-4 ring-blue-400'
            : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700';
        
        html += `
            <div class="relative p-8 rounded-2xl ${popularClass} plan-card animate-fade-in" style="animation-delay: ${index * 0.1}s;">
                ${plan.popular ? `
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold popular-badge">
                        ⭐ Le Plus Populaire
                    </div>
                ` : ''}
                
                <h3 class="text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                    ${plan.name}
                </h3>
                
                <div class="mb-6">
                    <span class="text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}">
                        ${plan.price}€
                    </span>
                    <span class="${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}">
                        /mois
                    </span>
                </div>
                
                <div class="space-y-3 mb-6 pb-6 border-b ${plan.popular ? 'border-blue-400' : 'border-gray-200 dark:border-gray-700'}">
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'}">${plan.websites}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'}">${plan.storage}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'}">${plan.bandwidth}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 ${plan.popular ? 'text-blue-200' : 'text-blue-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                        <span class="${plan.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'}">${plan.databases}</span>
                    </div>
                </div>
                
                <ul class="space-y-3 mb-8">
                    ${plan.features.map(feature => `
                        <li class="flex items-start space-x-2">
                            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-200' : 'text-green-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <a href="../order.html?service=web&plan=${encodeURIComponent(plan.name)}&price=${plan.price}">
                    <button class="w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                        plan.popular
                            ? 'bg-white text-blue-600 hover:bg-gray-100'
                            : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90'
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
