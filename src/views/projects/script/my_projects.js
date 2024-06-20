const myProjects = [
    {
        title: 'Codingo',
        content: 'Bu proje eğitim teknolojileri için yapılmış bir projedir. Teknofest ve Tübitak için tasarlanmıştır.',
        link: 'https://codingoweb.netlify.app/',
        type: ['Frontend', 'Backend', 'Mobile', 'Machine'],
        languages: ['Python', 'React', 'Javascript', 'Typescript', 'SQL', 'Flutter'],
        github: 'https://github.com/efeisky/codingo_client_app'
    },
    {
        title: 'Matematik Soru Üretme Uygulaması',
        content: 'Bu proje eğitim teknolojileri için yapılmış bir projedir. GPT4-o modeli ile matematik sorusu üretmeyi amaçlamaktadır.',
        link: '',
        type: ['Mobile'],
        languages: ['Flutter'],
        github: 'https://github.com/efeisky/math_mobile'
    },
    {
        title: 'Matematik Soru Üretme Uygulaması',
        content: 'Bu proje eğitim teknolojileri için yapılmış bir projedir. GPT4-o modeli ile matematik sorusu üretmeyi amaçlamaktadır.',
        link: 'https://math-project-y2zu.onrender.com',
        type: ['Backend'],
        languages: ['Typescript', 'SQL'],
        github: 'https://github.com/efeisky/math_project'
    },
    {
        title: 'HTTP Backend Projesi',
        content: 'Bu proje tecrübe arttırmak için yapılmıştır. Kendimce o tecrübeme göre yeni mimari kullanarak yaptığım bir projedir.',
        link: '',
        type: ['Backend'],
        languages: ['Typescript', 'SQL'],
        github: 'https://github.com/efeisky/http-backend'
    }
];

export class ProjectsDetails {
    constructor(title, content, link, type, languages, github) {
        this.title = title;
        this.content = content;
        this.link = link;
        this.type = type;
        this.languages = languages;
        this.github = github;
    }

    static getProjects() {
        return myProjects.map(project => new ProjectsDetails(
            project.title,
            project.content,
            project.link,
            project.type,
            project.languages,
            project.github
        ));
    }
}