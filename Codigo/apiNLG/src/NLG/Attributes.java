package NLG;
import simplenlg.features.Gender;


public class Attributes {


	private String Type;
	private String Gender;
	private String Number;
	private String VerbForm;
	

	public Attributes(String type, String gender, String number, String verbForm) {
		super();
		Type = type;
		Gender = gender;
		Number = number;
		VerbForm = verbForm;
	}
	public String getType() {
		return Type;
	}
	public Boolean getGender() {
		return Gender.compareToIgnoreCase("Masc")==0;
		
	}
	public boolean getNumber() {
		if(Number.compareToIgnoreCase("Sing")==0) {
			return false;
		}
			return true;
	}
	public String getVerbForm() {
		return VerbForm;
	}
	public void setType(String type) {
		Type = type;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public void setNumber(String number) {
		Number = number;
	}
	public void setVerbForm(String verbForm) {
		VerbForm = verbForm;
	}
	
	@Override
	public String toString() {
		return "Attributes [Type=" + Type + ", Gender=" + Gender + ", Number=" + Number + ", VerbForm=" + VerbForm
				+ "]";
	}
}
