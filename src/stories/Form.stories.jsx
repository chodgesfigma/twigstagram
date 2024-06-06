import React from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';

// Mock components with your applied Tailwind CSS classes
const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-6">
    {children}
  </form>
);

const FormItem = ({ children }) => (
  <div className="space-y-2">
    {children}
  </div>
);

const FormLabel = ({ children }) => (
  <label className="block base-medium text-light-1">
    {children}
  </label>
);

const FormControl = ({ as: Component = "input", ...props }) => (
  <Component {...props} className="shad-input mt-1 block w-full shadow-sm sm:text-sm rounded-md" />
);

const FormDescription = ({ children }) => (
  <p className="mt-2 text-sm text-light-4">
    {children}
  </p>
);

const FormMessage = ({ children }) => (
  <p className="mt-2 text-sm text-red">
    {children}
  </p>
);

export default {
  title: 'Twigstagram/ui/Form',
  component: Form,
};

const DefaultTemplate = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <Controller
            name="username"
            control={methods.control}
            render={({ field, fieldState }) => (
              <>
                <FormControl as="input" {...field} />
                <FormDescription>Enter your username</FormDescription>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </>
            )}
          />
        </FormItem>
        <FormItem>
          <FormLabel>Password</FormLabel>
          <Controller
            name="password"
            control={methods.control}
            render={({ field, fieldState }) => (
              <>
                <FormControl as="input" type="password" {...field} />
                <FormDescription>Enter your password</FormDescription>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </>
            )}
          />
        </FormItem>
      </Form>
    </FormProvider>
  );
};

export const DefaultForm = DefaultTemplate.bind({});
DefaultForm.args = {};

const ValidationTemplate = (args) => {
  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Controller
          name="username"
          control={methods.control}
          rules={{ required: 'Username is required' }}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl as="input" {...field} />
              <FormDescription>Enter your username</FormDescription>
              {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
            </FormItem>
          )}
        />
        <Controller
          name="password"
          control={methods.control}
          rules={{ required: 'Password is required' }}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl as="input" type="password" {...field} />
              <FormDescription>Enter your password</FormDescription>
              {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
            </FormItem>
          )}
        />
      </Form>
    </FormProvider>
  );
};

export const WithValidation = ValidationTemplate.bind({});
WithValidation.args = {};
