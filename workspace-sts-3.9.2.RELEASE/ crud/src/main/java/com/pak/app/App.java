package com.pak.app;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.pak.bean.Employee;
import com.pak.dao.EmployeeDao;

public class App {
 public static void main(String[] args) {

  ApplicationContext context = new ClassPathXmlApplicationContext(
    "spring-beans.xml");

  Employee t1 = new Employee();
  t1.setFirstName("aditya");
  t1.setLastName("pal");
  t1.setId(100);

  Employee t2 = new Employee();
  t2.setFirstName("rahul");
  t2.setLastName("roy");
  t2.setId(200);

  EmployeeDao employeeDao = (EmployeeDao) context.getBean("employeeDao");
  employeeDao.create(t1);
  employeeDao.create(t2);
  
  System.out.println("List After Employee Creation");
  System.out.println("-----------------------------");

//  for (Employee e : employeeDao.findAll()) {
//   System.out.println(e);
//  }

  t2.setLastName("Patil -Update");
  employeeDao.update(t2);

  System.out.println("List After Employee Updation");
  System.out.println("-----------------------------");

//  for (Employee e : employeeDao.findAll()) {
//   System.out.println(e);
//  }

  employeeDao.deleteById(100);

  System.out.println("List After Employee Deletion");
  System.out.println("-----------------------------");

//  for (Employee e : employeeDao.findAll()) {
//   System.out.println(e);
//  }
  
  System.out.println("Find By Id");
  System.out.println("-----------------------------");
  
  System.out.println(employeeDao.findById(200));

 }
}
