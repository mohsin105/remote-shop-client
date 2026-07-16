import React, { useContext } from 'react'
import AuthContext from '../_context/AuthContext'

export default function useAuthContext() {
  return useContext(AuthContext);
}
