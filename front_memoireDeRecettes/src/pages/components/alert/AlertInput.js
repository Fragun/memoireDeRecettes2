import Swal from 'sweetalert2';

export default function AlertInput() {
  return new Promise((resolve) => {
    Swal.fire({
      text: "Choisissez votre titre pour la liste de course",
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      inputPlaceholder: "Votre titre ici",
      icon: 'error',
      confirmButtonText: 'Ok',
      showCancelButton: true, 
      cancelButtonText: 'Annuler', 
      allowOutsideClick: false 
    }).then((result) => {
      if (result.isConfirmed) {
        const inputValue = result.value;
        resolve(inputValue); 
      } else {
        resolve(null); 
      }
    });
  });
}