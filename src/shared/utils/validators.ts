export const validate = (value: any, name: string, prefix?: string) => {
  switch(name) {
    case 'age':
      if (value === '') {
        return 'Please enter an age.';
      } else if (value < 0) {
        return 'Negative years is not valid.';
      } else if (value <= 17) {
        return 'You have to be more then or equal 18 years.';
      } else return '';
    case 'phone':
      const regex = new RegExp(`^[${prefix}]+[0-9]{${prefix?.length! + 8}}`);

      if(value.length === prefix?.length) {
        return 'Phone number is required';
      } else if(value.length < prefix?.length!) {
        return 'Can not delete a phone prefix';
      } else if(!regex.test(value)) {
        return 'Please enter a valid phone number.';
      } else return '';

  }
}
