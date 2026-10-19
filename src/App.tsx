type ResumeSectionProps = {
  label: string;
  children: React.ReactNode;
};

function ResumeSection({ label, children }: ResumeSectionProps) {
  return (
    <section className="resume-section">
      <h2>{label}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

const skills = [
  "Англійська мова — рівень B1 (Intermediate).",
  "Впевнений користувач ПК (MS Office: Word, Excel; Google Workspace).",
  "Досвід роботи з CRM-системами та програмами онлайн-запису клієнтів.",
  "Лідерські здібності, відповідальність, пунктуальність.",
  "Вміння ефективно працювати в команді та розв’язувати конфліктні ситуації.",
];

const responsibilities = [
  "Зустріч та організація прийому відвідувачів салону.",
  "Консультування клієнтів щодо послуг, цін та запис на процедури.",
  "Ведення запису клієнтів у робочій програмі / графіку.",
  "Підтримання порядку, високого рівня сервісу та затишної атмосфери в салоні.",
  "Робота з первинною документацією та розрахунок клієнтів.",
];

export default function App() {
  return (
    <main className="page-shell">
      <article className="resume" aria-label="Резюме Корольової Аліси">
        <header className="resume-header">
          <div className="portrait" role="img" aria-label="Фото Корольової Аліси">
            <img src="/assets/60ccc.png" alt="" />
          </div>

          <div className="identity">
            <span className="accent-line" aria-hidden="true" />
            <h1>Корольова Аліса</h1>
            <p>Адміністратор</p>
          </div>
        </header>

        <section className="contact-row" aria-label="Контакти">
          <h2>Контакти</h2>
          <a href="tel:+380509719945">+380509719945</a>
          <a href="mailto:alissakopoleva@gmail.com">
            alissakopoleva@gmail.com
          </a>
          <span>20 років</span>
        </section>

        <ResumeSection label="Про мене">
          <p>
            Пунктуальна, легко адаптуюся до нових завдань, маю високий рівень
            емпатії та щирий інтерес до роботи з людьми.
          </p>
        </ResumeSection>

        <ResumeSection label="Досвід роботи">
          <div className="position-heading">
            <div>
              <h3>Адміністратор клініки естетичної медицини</h3>
              <p>«Be Perfect», м. Київ</p>
            </div>
            <span>3 місяці</span>
          </div>
          <ul>
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection label="Освіта">
          <h3>Бакалавр</h3>
          <p className="muted">Незакінчена вища освіта / студентка.</p>
        </ResumeSection>

        <ResumeSection label="Навички">
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection label="Інтереси">
          <p>
            Регулярно займаюся спортом. Захоплююся малюванням. Віддаю перевагу
            художній та професійній літературі.
          </p>
        </ResumeSection>
      </article>
    </main>
  );
}
