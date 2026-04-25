import { handalPostAction } from '@/action/PostAction';
import { getPosts } from '@/database/postdb';
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

const ServerActionPage = () => {
    const posts = getPosts()
  
    return (
        <div>
            <Form action={handalPostAction} className="w-full max-w-96 mx-auto mt-10 shadow-2xl p-10 rounded-2xl">
                <Fieldset>
                    <Fieldset.Legend>Add Post</Fieldset.Legend>
                    <Description>Update your profile information.</Description>
                    <FieldGroup>

                        <TextField
                            isRequired
                            name="title"
                        >
                            <Label>Title</Label>
                            <Input placeholder="Enter Title" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="desc" type="text">
                            <Label>Description</Label>
                            <Input placeholder="Description" />
                            <FieldError />
                        </TextField>

                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Save changes
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
            <div className='grid grid-cols-3 gap-4 p-10'>
                {posts.map(post => <div key={post.id} className='border p-10'>
                    <h2>{post.title}</h2>
                    <h3>{post.description}</h3>
                </div>)}
            </div>
        </div>

    );
};

export default ServerActionPage;