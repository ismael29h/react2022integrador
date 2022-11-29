import { fireEvent, render, waitFor } from '@testing-library/react'
import Buscador from './Buscador';

const onBuscar = jest.fn();
const renderBuscador = () => {
    const component = render(<Buscador onBuscar={onBuscar} />);
    return component;
};

describe('<Buscador />', () => {
    test('Renderizar el componente.', async () => {
        const component = renderBuscador();
        expect(component.container).toBeInTheDocument();
    });
    
    test('NO se llama a "onBuscar" cuando la búsqueda sea inferior a 3 caracteres y se haga click en el botón buscar', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        // Debug
        fireEvent.click(button);
        expect(onBuscar).not.toBeCalled();
    });

    test('Se llama a "onBuscar" cuando se haga click en el botón buscar y posee la búsqueda la longitud requerida', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        const input = component.getByRole('searchbox').querySelector('input');
        // Debug
        fireEvent.change(input, {target: {value: 'test'}});
        fireEvent.click(button);

        waitFor(() =>{
            expect(onBuscar).toBeCalledWith('test');
        });
    });

});