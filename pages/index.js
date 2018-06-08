'use strict'

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Droits from '../shared/components/droits'
import Link from 'next/link'

const Home = () => <Fragment>
  <Header title='Accueil' />
  <section className='section'>
    <div className='container'>
      <div className='content'>
        <div className='columns'>
          <div className='column'>
            <h2>Prototype</h2>
            <p>
              <b>ATTENTION</b> Pour tester ce site, ne rechargez pas la page
              à moins de vouloir remettre les valeurs à neufs.
              Les données ne sont ni transmises, ni sauvegardées.
              <b>Il ne s’agit que d’une démonstration</b>.
            </p>
          </div>
          <div className='column'>
            <h2>Mode d’emploi</h2>
            <p>
              Le <code>login</code> est facultatif.
              On doit spécifier un mot de passe, n’importe lequel.
              Pour le nom, on peut en inventer un ou alors choisir parmi
              les <Link href='/admin/orgs' prefetch><a>orgs</a></Link> ou
              les <Link href='/admin/volunteers' prefetch><a>volontaires</a></Link>.
            </p>
            <p>
              N’importe qui peut (pour le moment) créer des trucs
              (<i>gift</i>, volontaire, org) et seul un volontaire
              peut échanger des heures contre un <i>gift</i>.
            </p>
            <p>
              Quand un volontaire échange des heures pour un <i>gift</i>,
              ce dernier disparait du magasin mais sera visible
              sur le profil du volontaire et sur l’admin des <i>gifts</i>
              et le temps sera débité du profil du volontaire.
            </p>
          </div>
          <div className='column'>
            <h2>À faire</h2>
            <ul>
              <li>Confirmer les heures des volontaires (org)</li>
              <li>Marquer les heures des volontaires (org)</li>
              <li>Marquer leurs heures par org (volontaire)</li>
              <li>Logout (update volontaires)</li>
              <li>Backend (base de données)</li>
            </ul>
          </div>
        </div>
      </div>
      <Droits />
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(Home)
