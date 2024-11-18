import axios from 'axios';


const sendMessage = async (phone_number: string, template_id: string, params: string[]) => {
    console.log(phone_number, template_id)
    try {
        const response = await axios.post(
            'https://app.mercately.com/retailers/api/v1/whatsapp/send_notification_by_id',
            {
                phone_number: phone_number,
                internal_id: template_id,
                template_params: params,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': 'dba978c27456a676ba086c7aa610ca62'
                }
            }
        );
        return 'Mensaje enviado con éxito';
    } catch (error) {
        console.error('Error sending notification:', error);
    }
}

export default {
    sendMessage
}