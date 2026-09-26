import { useState } from 'react';
import type { FormEvent, ChangeEvent, FocusEvent } from 'react';

interface FormData {
  name: string;
  type: string;
  attack: string;
  talent: string;
}

interface Errors {
  name?: string;
  type?: string;
  attack?: string;
  talent?: string;
}

function validateName(name: string): string | undefined {
  if (name.length < 2) {
    return 'Le nom doit faire au moins 2 caractères';
  }
  return undefined;
}

function validateType(type: string): string | undefined {
  if (type.length < 2) {
    return 'Le type doit faire au moins 2 caractères';
  }
  return undefined;
}

function validateAttack(attack: string): string | undefined {
  if (attack.length < 2) {
    return 'Le nom de attaque doit faire au moins 2 caractères';
  }
  return undefined;
}

function validateTalent(talent: string): string | undefined {
  if (talent.length < 2) {
    return 'Le talent doit faire au moins 2 caractères';
  }
  return undefined;
}

function validate(data: FormData): Errors {
  return {
    name: validateName(data.name),
    type: validateType(data.type),
    attack: validateAttack(data.attack),
    talent: validateTalent(data.talent),
  };
}

export default function Suggest() {
  const [form, setForm] = useState<FormData>({
    name: '',
    type: '',
    attack: '',
    talent: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const errors = validate(form);
  const isValid = !errors.name && !errors.type && !errors.attack && !errors.talent;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitted(true);
    setForm({ name: '', type: '', attack: '', talent: '' });
    setTouched({});
  };

  return (
    <div className="suggestion-form">
      <h2>Proposer un Pokémon</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className={`field ${touched.name && errors.name ? 'invalid' : ''}`}>
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" data-testid="name" value={form.name} onChange={handleChange} onBlur={handleBlur} />
          {touched.name && errors.name && <p className="field-error" data-testid="err-name">{errors.name}</p>}
        </div>

        <div className={`field ${touched.type && errors.type ? 'invalid' : ''}`}>
          <label htmlFor="type">Type</label>
          <input id="type" name="type" data-testid="type" value={form.type} onChange={handleChange} onBlur={handleBlur} />
          {touched.type && errors.type && <p className="field-error" data-testid="err-type">{errors.type}</p>}
        </div>

        <div className={`field ${touched.attack && errors.attack ? 'invalid' : ''}`}>
          <label htmlFor="attack">Attaque</label>
          <input id="attack" name="attack" data-testid="attack" value={form.attack} onChange={handleChange} onBlur={handleBlur} />
          {touched.attack && errors.attack && <p className="field-error" data-testid="err-attack">{errors.attack}</p>}
        </div>

        <div className={`field ${touched.talent && errors.talent ? 'invalid' : ''}`}>
          <label htmlFor="talent">Talent</label>
          <input id="talent" name="talent" data-testid="talent" value={form.talent} onChange={handleChange} onBlur={handleBlur} />
          {touched.talent && errors.talent && <p className="field-error" data-testid="err-talent">{errors.talent}</p>}
        </div>

        <button type="submit" data-testid="submit" disabled={!isValid}>
          Envoyer
        </button>
      </form>

      {submitted && <p data-testid="ok">Merci ! Votre proposition a bien été envoyée.</p>}
    </div>
  );
}