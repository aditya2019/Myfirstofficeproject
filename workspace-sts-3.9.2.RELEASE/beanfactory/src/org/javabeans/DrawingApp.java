package org.javabeans;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.FileSystemResource;

public class DrawingApp {
public static void main(String args[])
{
    ApplicationContext context=new ClassPathXmlApplicationContext("spring.xml");	
	Triangle triangle=(Triangle)context.getBean("Tri");
	triangle.draw();
}
	
}
