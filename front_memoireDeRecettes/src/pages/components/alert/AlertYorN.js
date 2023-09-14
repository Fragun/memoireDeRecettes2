
import Swal from 'sweetalert2';

export default function AlertYorN(title, text) {
  return Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    return result; // Renvoyer le résultat de la boîte de dialogue
  });
}