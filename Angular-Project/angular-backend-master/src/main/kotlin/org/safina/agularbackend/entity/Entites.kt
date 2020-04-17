package org.safina.agularbackend.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Exercice (
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null,
        val dateDebut: String = "",
        val dateFin: String ="",
        val budge: Double =0.0,
        val depense: Double = 0.0,
        val motif:  String = "",
        val idUser: Long = 0
)
@Entity
class entree (
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null,
        val date: String = "",
        val motif: String ="",
        val montant: Double =0.0,
        val idUser: Long = 0
)
@Entity
class sortie (
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null,
        val date: String = "",
        val motif: String ="",
        val montant: Double =0.0,
        val idExecice: Long = 0
)

@Entity
class User (
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO) val id: Long? = null,
        val nomComplet: String = "",
        val login: String ="",
        val pwd: String ="",
        val email: String ="",
        val solde: Double =0.0,
        val idUser: Long = 0
)