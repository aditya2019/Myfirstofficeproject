package org.FirstAopProgram.service;

import org.FirstAopProgram.model.Circle;
import org.FirstAopProgram.model.Tringale;

public class ShapeService {
	private Circle circle;
	private Tringale tringle;
	public Circle getCircle() {
		return circle;
	}
	public void setCircle(Circle circle) {
		this.circle = circle;
	}
	public Tringale getTringle() {
		return tringle;
	}
	public void setTringle(Tringale tringle) {
		this.tringle = tringle;
	}
	
	

}
