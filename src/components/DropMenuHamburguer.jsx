"use client"

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Bars3Icon} from "@heroicons/react/24/outline";
import { apagar } from '@/actions/avaliacoes';


export default function DropMenuHamburguer({idExercicio}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleEdit = () => {
      push(`/contas/${idConta}/edit`)
    }
  
    const handleDelete = async () => {
      const resp = await apagar(idExercicio)
  
      resp?.error ?
        error(resp.error) :
        success("conta apagada com sucesso")
  
      handleClose()
    }
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Bars3Icon className='h-6 w-6 bg-green-950' />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Editar</MenuItem>
          <MenuItem onClick={handleClose}>Excluir</MenuItem>
        </Menu>
      </div>
    );
}

