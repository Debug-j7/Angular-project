package org.safina.agularbackend

import org.safina.agularbackend.dao.UserDao
import org.safina.agularbackend.entity.User
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.repository.findByIdOrNull

@SpringBootApplication
class AngularBackendApplication

fun main(args: Array<String>) {
	val context = runApplication<AngularBackendApplication>(*args)
	val userDao = context.getBean(UserDao::class.java)

	val user = User(1, "gaetan", "user1", "pw1", "gaetanlw", 10.0, 1)
	//userDao.save(user)
	//userDao.delete(user)
	val userbb = userDao.findByIdOrNull(2)
	print(userbb?.email)
}