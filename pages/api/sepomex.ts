import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cp } = req.query;

  if (!cp || typeof cp !== 'string') {
    return res.status(400).json({ error: 'Código postal no proporcionado o inválido' });
  }

  try {
    
    const response = await axios.get(`https://api-sepomex.hckdrk.mx/query/info_cp/${cp}?token=3c3bfa45-33b0-472c-b69b-b9b72397b7bc`);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al obtener datos de SEPOMEX:', error);
    return res.status(500).json({ error: 'Error al obtener datos de SEPOMEX' });
  }
}
