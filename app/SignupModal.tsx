"use client";

import { useEffect, useRef } from "react";

const I = {
  x: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  user: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  mail: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  globe: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  chevron: (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  male: (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="14" r="7" />
      <path d="m14 10 7-7" />
      <path d="M15 3h6v6" />
    </svg>
  ),
  female: (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="7" />
      <path d="M12 16v6" />
      <path d="M9 19h6" />
    </svg>
  ),
  lock: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  eye: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function SignupModal({ onClose }: { onClose: () => void }) {
  const firstRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal-close" type="button" aria-label="Fermer" onClick={onClose}>
          {I.x}
        </button>
        <h2 className="modal-title">Créer un compte</h2>
        <p className="modal-sub">Commencez votre préparation au TCF dès aujourd'hui.</p>

        <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
          <label className="f-label" htmlFor="f-name">Nom complet</label>
          <div className="f-input focused">
            {I.user}
            <input id="f-name" ref={firstRef} placeholder="Prénom et nom" />
          </div>

          <label className="f-label" htmlFor="f-mail">Adresse e-mail</label>
          <div className="f-input">
            {I.mail}
            <input id="f-mail" type="email" placeholder="vous@exemple.com" />
          </div>

          <label className="f-label" htmlFor="f-country">Pays de résidence</label>
          <div className="f-input f-select">
            {I.globe}
            <select id="f-country" defaultValue="">
              <option value="" disabled>Choisissez votre pays</option>
              <option>France</option>
              <option>Canada</option>
              <option>Belgique</option>
              <option>Suisse</option>
              <option>Maroc</option>
              <option>Algérie</option>
              <option>Tunisie</option>
              <option>Autre</option>
            </select>
            <span className="f-chev">{I.chevron}</span>
          </div>

          <span className="f-label">Sexe</span>
          <div className="f-sex">
            <button type="button" className="sex-btn">{I.male}<span>Homme</span></button>
            <button type="button" className="sex-btn">{I.female}<span>Femme</span></button>
          </div>

          <label className="f-label" htmlFor="f-pwd">Mot de passe</label>
          <div className="f-input">
            {I.lock}
            <input id="f-pwd" type="password" placeholder="8 caractères minimum" />
            <span className="f-eye">{I.eye}</span>
          </div>
          <p className="f-help">Au moins 8 caractères, avec des chiffres et des majuscules.</p>

          <label className="f-label" htmlFor="f-pwd2">Confirmer le mot de passe</label>
          <div className="f-input">
            {I.lock}
            <input id="f-pwd2" type="password" placeholder="••••••••" />
          </div>

          <label className="f-accept">
            <input type="checkbox" />
            <span>
              J'accepte les <a href="#">conditions générales</a> et la{" "}
              <a href="#">politique de confidentialité</a>.
            </span>
          </label>

          <button className="f-submit" type="submit">Créer mon compte</button>
        </form>

        <p className="modal-foot">
          Vous avez déjà un compte ? <a href="#">Se connecter</a>
        </p>
      </div>
    </div>
  );
}
