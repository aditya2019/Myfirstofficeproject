package org.aditya.hibernate;



import org.aditya.javabrains.dto.employeedetails;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;


public class HibernateTest {
	public static void main(String[] args)
	{
		employeedetails emp=new employeedetails();
		emp.setEmpId("A");
		emp.setEmpName("Ram");
	  SessionFactory sessionFactory =new Configuration().configure().buildSessionFactory();
	   Session session = sessionFactory.openSession();
	}
}
