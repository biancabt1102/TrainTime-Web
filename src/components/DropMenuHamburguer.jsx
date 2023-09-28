"use client"

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Bars3Icon} from "@heroicons/react/24/outline";
import { apagar } from '@/actions/avaliacoes';
import toast from 'react-hot-toast';
import { useToast } from '@/hooks/toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';

export default function DropMenuHamburguer({idExercicio}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { error, success } = useToast()
    const { push } = useRouter()

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleEdit = () => {
      push(`/exercicios/${idExercicio}/edit`)
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
          <MenuItem onClick={handleEdit}>editar</MenuItem>
          <AlertDialog>
          <AlertDialogTrigger>
            <MenuItem>apagar</MenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Ao apagar o exercício, todos os dados serão perdidos. Essa ação não tem volta.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>sim, quero apagar esse exercício</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </Menu>
    </div>
  );
}

