package org.safina.agularbackend.config

import org.springframework.context.annotation.Configuration
import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter
import org.safina.agularbackend.entity.*

@Configuration
class RepositoryConfig : RepositoryRestConfigurerAdapter() {
    override fun configureRepositoryRestConfiguration(config: RepositoryRestConfiguration) {
        config.exposeIdsFor(User::class.java)
        config.exposeIdsFor(Exercice::class.java)
        config.exposeIdsFor(entree::class.java)
        config.exposeIdsFor(sortie::class.java)
    }
}