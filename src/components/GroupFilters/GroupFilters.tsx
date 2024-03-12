import {Button, Checkbox, FormItem, Select} from '@vkontakte/vkui';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {AvatarColours, Filters} from '../../types/groups';
import './styleGroupFilters.css';

const avatarColours: Array<{label: string; value: AvatarColours}> = [
  {label: 'Красный', value: 'red'},
  {label: 'Залёный', value: 'green'},
  {label: 'Жёлтый', value: 'yellow'},
  {label: 'Синий', value: 'blue'},
  {label: 'Фиолетовый', value: 'purple'},
  {label: 'Белый', value: 'white'},
  {label: 'Оранжевый', value: 'orange'},
];

const privacyTypes = [
  {label: 'Все', value: 'все'},
  {label: 'Закрытая', value: 'закрытая'},
  {label: 'Открытая', value: 'открытая'},
];

interface Props {
  defaultFilters: Filters;
  onSubmit: SubmitHandler<Filters>;
}

export const GroupFilters = ({defaultFilters, onSubmit}: Props) => {
  const {control, handleSubmit} = useForm<Filters>({defaultValues: defaultFilters});

  const handleFormReset = () => {
    onSubmit(defaultFilters);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="GroupFilters">
      <Controller
        control={control}
        name="avatarColour"
        render={({fieldState, field: {ref, ...restField}}) => (
          <FormItem status={fieldState.invalid ? 'error' : 'default'} top="Цвет аватара">
            <Select {...restField} options={avatarColours} />
          </FormItem>
        )}
      />
      <Controller
        control={control}
        name="privacyType"
        render={({fieldState, field: {ref, ...restField}}) => (
          <FormItem status={fieldState.invalid ? 'error' : 'default'} top="Тип приватности">
            <Select {...restField} options={privacyTypes} />
          </FormItem>
        )}
      />
      <Controller
        control={control}
        name="hasFriends"
        render={({fieldState, field: {ref, ...restField}}) => (
          <FormItem status={fieldState.invalid ? 'error' : 'default'} top="Подписанные друзья">
            <Checkbox {...restField} />
          </FormItem>
        )}
      />
      <Button mode="secondary" onClick={handleFormReset}>
        Сбросить
      </Button>
      <Button type="submit">Применить</Button>
    </form>
  );
};
