const projectsData = {

    // PROJET PRO \\


    "nexforma": {
        title: "Infrastructure Nexforma",
        category: "SISR",
        description: "Projet professionnel anonymisé réalisé en entreprise.",
        tags: ["PfSense", "Vlan", "Proxmox", "OpenVPN", "Zyxel / Nebula"],
        docLink: "https://github.com/BouleDeGome/Nexforma",
        docType: "Documentation",
        schemas: ["./img/Schéma/Nexforma/Schéma - Nexforma.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure Nexforma.pdf" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Nexforma/Schéma - Nexforma.webp" }
        ]
    },
    "ch": {
        title: "Stage Centre Hospitalier",
        category: "SISR",
        description: "Stage professionnel réalisé en centre hospitalier.",
        tags: ["GLPI", "Windows Server", "vCenter", "Microsoft Exchange", "PowerShell", "CLI"],
        docLink: "https://github.com/BouleDeGome/",
        docType: "Rapport de stage",
        schemas: ["./img/Schéma/Centre Hospitalier/Schéma - Centre Hospitalier.webp"],
        demoLink: null,
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Stage Centre Hospitalier.pdf" },
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - Centre Hospitalier.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Centre Hospitalier/Schéma - Centre Hospitalier.webp" }
        ]
    },


    // ---------------------------

    // PROJET SCO \\


    "r3st0": {
        title: "Infrastructure R3st0.fr",
        category: "SISR",
        description: "Mise en place d'une infrastructure réseau complète avec Active Directory, serveur DHCP, DNS et Partage de fichiers synchronisé avec l'AD.",
        tags: ["Windows Server", "Active Directory", "DHCP/DNS", "SMB Windows", "Linux", "TFTP"],
        docLink: "https://github.com/BouleDeGome/R3st0.fr",
        docType: "Documentation",
        schemas: ["./img/Schéma/R3st0.fr/Schéma - R3st0.fr.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure R3st0.fr.pdf" },
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - R3st0.fr.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/R3st0.fr/Schéma - R3st0.fr.webp" }
        ]
    },
    "gourmet": {
        title: "Infrastructure Gourmet&Co",
        category: "SISR",
        description: "Déploiement d'une infrastructure réseau complète avec Active Directory, serveur DHCP, Drive auto-hébergé avec pare-feu StormShield et superviseur Centreon.",
        tags: ["Windows Server", "Active Directory", "DHCP", "VLAN", "StormShield", "Centreon", "ownCloud", "CLI"],
        docLink: "#",
        docType: "Documentation",
        schemas: ["./img/Schéma/GourmetCo/Schéma - GourmetCo.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation Stormshield", url: "./fch/Documentations/Gourmet - Documentation Stormshield.pdf" },
            { name: "📄 Documentation AD/DHCP", url: "./fch/Documentations/Gourmet - Documentation AD-DHCP.pdf" },
            { name: "📄 Documentation Centreon", url: "./fch/Documentations/GourmetCo - Documentation Centreon.pdf" },
            { name: "📄 Documentation OwnCloud", url: "./fch/Documentations/GourmetCo - Documentation OwnCloud.pdf" },
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - GourmetCo.docx" },
            { name: "👥​ Tableau des planifications", url: "https://trello.com/b/XMhnwYfr/techuniverse" },
            { name: "🖼️ Schéma", url: "./img/Schéma/GourmetCo/Schéma - GourmetCo.webp" }
        ]
    },
    "boxtobed": {
        title: "Infrastructure BoxToBed",
        category: "SISR",
        description: "Mise en place d'une infrastructure réseau complète avec Active Directory, serveur DHCP, DNS et Partage de fichiers synchronisé avec l'AD.",
        tags: ["Windows Server", "Active Directory", "DHCP/DNS", "Linux", "TFTP", "CLI / Configuration WEB"],
        docLink: "https://github.com/BouleDeGome/BoxToBed/",
        docType: "Documentation",
        schemas: ["./img/Schéma/BoxToBed/Schéma - BoxToBed.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure BoxToBed.pdf" },
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - BoxToBed.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/BoxToBed/Schéma - BoxToBed.webp" },
            { name: "🖼️ Schéma Cisco", url: "./img/Schéma/BoxToBed/Schéma cisco - BoxToBed.png" }
        ]
    },
    "techunivers": {
        title: "Infrastructure TechUnivers",
        category: "SISR",
        description: "Mise en place d'une infrastructure réseau complète avec Active Directory, Pare-feu StormShield, server Apache2 et HAProxy avec haute disponibilité pour les deux services.",
        tags: ["Windows Server", "Active Directory", "Linux", "Apache2", "HAProxy", "StormShield", "CLI"],
        docLink: "https://github.com/BouleDeGome/TechUniverse",
        docType: "Documentation",
        schemas: ["./img/Schéma/TechUnivers/Schéma - TechUnivers.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure TechUnivers.pdf" },
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - TechUnivers.docx" },
            { name: "👥​ Trello", url: "https://trello.com/b/XMhnwYfr/techuniverse" },
            { name: "🖼️ Schéma", url: "./img/Schéma/TechUnivers/Schéma - TechUnivers.webp" }
        ]
    },
    "802.1x": {
        title: "Infrastructure LouisDeFoix",
        category: "SISR",
        description: "Mise en place d'une infrastructure avec authentification sur le réseau sécurisé (via protocole 802.1x).",
        tags: ["Windows Server", "Active Directory", "Windows NPS", "StormShield", "CLI"],
        docLink: "",
        docType: "Documentation",
        schemas: ["./img/Schéma/LPO/Schéma - LPOLouisDeFoix.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure TechUnivers.pdf" },
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - TechUnivers.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/TechUnivers/Schéma - TechUnivers.webp" }
        ]
    },
    "Htldville": {
        title: "Infrastructure Hôtel de ville",
        category: "SISR",
        description: "Déploiement d'une infrastructure obsolète et ajout de serveurs récents pour migration.",
        tags: ["Migration Windows", "WindowsServer", "AD", "DHCP"],
        docLink: "",
        docType: "Documentation",
        schemas: ["./img/Schéma/Hoteldeville/Schéma - Hôtel de ville.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation AD", url: "./fch/Documentations/Hôtel de ville - Documentation AD-DNS.pdf" },
            { name: "📄 Documentation DHCP", url: "./fch/Documentations/Hôtel de ville - Documentation DHCP.pdf" },
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - Hôtel de ville.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Hoteldeville/Schéma - Hôtel de ville.webp" }
        ]
    },

    // ---------------------------


    // PROJET PER \\

    "ZelionHost": {
        title: "Infrastructure ZelionHost",
        category: "SISR",
        description: "Déploiement d'une infrastructure complète avec matérielle professionnelle. Voir ci-dessous",
        tags: ["Proxmox", "OPNSense", "VLAN", "ReverseProxy", "Linux Bash", "Pterodactyl", "Plesk", "Docker", "VLAN", "Centreon", "HP Proliant", "HP iLO", "ECT..."],
        docLink: "https://github.com/BouleDeGome/Calypsis",
        docType: "Documentation",
        schemas: ["./img/Schéma/NexaHost/Schéma - Nexahost.webp"],
        demoLink: "#",
        files: [
            { name: "🔎 Site Web", url: "https://zelionhost.fr" },
            { name: "🛡️ Discord", url: "https://discord.gg/Hk5cT4Nybw" },
            { name: "🖼️ Schéma", url: "./img/Schéma/NexaHost/Schéma - Nexahost.webp" }
        ]
    },
    "Calypsis": {
        title: "Bientôt Disponible !",
        category: "SISR",
        description: "Soon...",
        tags: ["Bientôt",],
        docLink: "https://github.com/BouleDeGome/Calypsis",
        docType: "Documentation",
        schemas: ["./img/Schéma/Calypsis/Schéma - Calypsis.webp"],
        demoLink: "#",
        files: [
            { name: "🖼️ Schéma", url: "./img/Schéma/Calypsis/Schéma - Calypsis.webp" }
        ]
    },
    "portfolio": {
        title: "Site web portfolio",
        category: "SLAM",
        description: "Création d'un site portfolio responsive pour présenter mes compétences et projets réalisés durant ma formation.",
        tags: ["HTML", "CSS", "JavaScript"],
        docLink: "https://github.com/BouleDeGome/portfolio",
        docType: "Code",
        schemas: ["./img/Schéma/Portfolio/Schéma - Portfolio.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Site web portfolio.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - Portfolio.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Portfolio/Schéma - Portfolio.webp" }
        ]
    },
    
};

window.projectsData = projectsData;

// Organisation des projets par catégories dans le portfolio
window.projectsCategories = [
    {
        title: "Projets Professionnels",
        projects: ["nexforma", "ch"]
    },
    {
        title: "Projets Scolaires",
        projects: ["r3st0", "Htldville", "boxtobed", "techunivers", "gourmet", "802.1x"]
    },
    {
        title: "Projets Personnels",
        projects: ["portfolio", "ZelionHost", "Calypsis"]
    }
];
