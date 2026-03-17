const projectsData = {
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
        tags: ["Windows Server", "Active Directory", "DHCP", "VLAN", "StormShield", "Centreon", "ownCloud"],
        docLink: "#",
        docType: "Documentation",
        schemas: ["./img/Schéma/Mairie de Bidart/Schéma - Mairie de Bidart.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure Mairie de Bidart.pdf" },
            { name: "📄 Sujet", url: "./fch/sujets/Sujet - Mairie de Bidart.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Mairie de Bidart/Schéma - Mairie de Bidart.webp" }
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
            { name: "🖼️ Schéma", url: "./img/Schéma/TechUnivers/Schéma - TechUnivers.webp" }
        ]
    },
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
            { name: "📄 Sujet", url: "./fch/Sujets/Sujet - Nexforma.docx" },
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
    "NexaHost": {
        title: "Infrastructure Nexahost",
        category: "SISR",
        description: "Déploiement d'une infrastructure complète avec matérielle professionnelle. Voir ci-dessous",
        tags: ["Proxmox", "OPNSense", "VLAN", "ReverseProxy", "Linux Bash", "Pterodactyl", "Plesk", "Docker", "VLAN", "Centreon", "HP Proliant", "HP iLO", "ECT..."],
        docLink: "https://github.com/BouleDeGome/Calypsis",
        docType: "Documentation",
        schemas: ["./img/Schéma/Calypsis/Schéma - Calypsis.webp"],
        demoLink: "#",
        files: [
            { name: "📄 Documentation", url: "./fch/Documentations/Documentation - Infrastructure Calypsis.pdf" },
            { name: "📄 Sujet", url: "./fch/sujet/Sujet - Calypsis.docx" },
            { name: "🖼️ Schéma", url: "./img/Schéma/Calypsis/Schéma - Calypsis.webp" }
        ]
    }
};

window.projectsData = projectsData;
