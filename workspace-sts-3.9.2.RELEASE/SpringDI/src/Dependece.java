interface Shape
{
	 void draw();
	
}
class Circle implements Shape
{
	public void draw()
	{
		System.out.print("this is circle");
	}
}
class tringle implements Shape
{
	public void draw()
	{
		System.out.print("this is trangle");
	}
}
class Dependece 
{
	private Shape value;
	public void setvalue(Shape shape)
	{
	  this.value=shape;	
	}
	public void getvalue()
	{
		this.value.draw();
	}
	public static void main(String arg[])
	{
		Dependece our =new Dependece();
		Shape cl=new Circle();
		our.setvalue(cl);	
		our.getvalue();
	}
	
}