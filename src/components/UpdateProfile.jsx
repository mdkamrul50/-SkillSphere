'use client';

import { authClient } from '@/lib/auth-client';
import { Sparkles } from '@gravity-ui/icons';
import {
  Button,
  Description,
  Form,
  Input,
  Label,
  Modal,
  TextField,
} from '@heroui/react';
import { BiEdit } from 'react-icons/bi';

export function UpdateProfile() {
  const onSubmit = async(e)=>{
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    console.log({
      name,
      url
    });

    await authClient.updateUser({
      name,
      image,
    })
  }
  return (
    <Modal>
      <Button
        variant="primary"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center font-semibold gap-1.5"
      >
        <BiEdit /> Edit Profile
      </Button>
      <Modal.Backdrop
        className=" bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur"
      >
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90 py-10 bg-linear-to-br from-blue-100 via-blue-300 to-blue-50">
            <Modal.Heading className="text-xl text-blue-600 font-bold">
              Update User
            </Modal.Heading>

            <Form onSubmit={onSubmit}>
              <div className="space-y-4 my-6">
                <TextField isRequired className="w-full" name="name">
                  <Label>Full Name</Label>
                  <Input className={'bg-blue-100'} placeholder="Enter name" />
                </TextField>
                <TextField isRequired className="w-full " name="image">
                  <Label>Image URL</Label>
                  <Input
                    className={'bg-blue-100'}
                    placeholder="Enter your image url"
                  />
                </TextField>
              </div>
              <Modal.Footer>
                <Button type="submit" className="w-full" slot="close">
                  Update
                </Button>
              </Modal.Footer>
            </Form>

            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
