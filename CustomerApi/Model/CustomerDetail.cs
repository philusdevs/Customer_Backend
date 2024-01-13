/* 
 * Tasks
 * Age Calculation
 * Date of Birth Cant be larger than the current date 
 */



using System.ComponentModel.DataAnnotations;

namespace CustomerApi.Model
{
	public class CustomerDetail
	{

        [Key]
        [Required]
        public Guid CustomerID { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Username => FirstName + "" + LastName;

        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }

        [Required]
        [Range(typeof(DateTime), "1900-01-01", "2024-01-12")]
        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime DateOfBirth {


            get => _dateOfBirth;

            set
            {

                _dateOfBirth = value > DateTime.UtcNow ? throw new ArgumentException("Date of birth is larger than the current date") : value;
                CalculateAge();
            }
        }



        [Required]
        public int Age { get; set; }

        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Created { get; set; } = DateTime.UtcNow;

        [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime? Edited  { get; set; }
        public void IsEdited()
        {
            Edited = DateTime.UtcNow;
        }
        public bool IsDeleted { get; set; }



        private DateTime _dateOfBirth;

        private void CalculateAge()
        {
            Age = DateTime.UtcNow.Year - DateOfBirth.Year - (_dateOfBirth > DateTime.UtcNow.AddYears(-Age) ? 1 : 0);
        }









    }

  

}



