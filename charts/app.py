import pandas as pd
import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.express as px
from base64 import b64encode
import io

# Datos proporcionados
data = {
    'Ámbito Geográfico / Sexo': ['Costa', 'Costa', 'Sierra', 'Sierra', 'Selva', 'Selva'],
    'Sexo': ['Mujeres', 'Hombres', 'Mujeres', 'Hombres', 'Mujeres', 'Hombres'],
    '2012': [92.3, 91.5, 93.3, 92.8, 84.4, 82.6],
    '2013': [92.8, 92.9, 92.6, 93.9, 88.5, 86.7],
    '2014': [93.3, 92.7, 93.5, 94.9, 88.9, 86.6],
    '2015': [93.8, 93.9, 95.4, 94.3, 88.7, 90.4],
    '2016': [94.0, 94.9, 93.9, 95.4, 88.3, 90.3],
    '2017': [92.9, 95.3, 94.5, 96.6, 91.2, 90.3],
    '2018': [94.9, 95.7, 95.0, 97.0, 90.9, 92.1],
    '2019': [96.3, 94.9, 95.4, 96.0, 92.7, 92.6],
    '2020': [92.7, 92.9, 94.5, 94.0, 87.5, 84.9],
    '2021': [95.8, 93.7, 96.0, 95.6, 89.9, 87.0],
    '2022': [97.5, 95.6, 96.7, 96.5, 93.2, 90.8]
}

# Convertir a DataFrame
df = pd.DataFrame(data)

# Establecer el índice
df.set_index(['Ámbito Geográfico / Sexo', 'Sexo'], inplace=True)

# Inicializar la aplicación Dash
app = dash.Dash(__name__)

# Diseño de la aplicación
app.layout = html.Div([
    html.H1("Índice de Algo por Región y Sexo"),
    dcc.Dropdown(
        id='region-dropdown',
        options=[
            {'label': 'Costa', 'value': 'Costa'},
            {'label': 'Sierra', 'value': 'Sierra'},
            {'label': 'Selva', 'value': 'Selva'}
        ],
        value='Costa',
        clearable=False
    ),
    dcc.Graph(id='indicator-graphic'),
    html.A(
        html.Button("Download as HTML"), 
        id="download",
        href="",
        download="plotly_graph.html"
    )
])

# Callback para actualizar la gráfica según la región seleccionada
@app.callback(
    [Output('indicator-graphic', 'figure'), Output('download', 'href')],
    [Input('region-dropdown', 'value')]
)
def update_graph(selected_region):
    filtered_df = df.loc[selected_region]
    # Reorganizar los datos para Plotly
    filtered_df = filtered_df.T.reset_index().melt(id_vars='index', var_name='Sexo', value_name='Índice de Algo')

    fig = px.line(filtered_df, x='index', y='Índice de Algo', color='Sexo',
                    title=f'Índice de Algo en {selected_region}', labels={'index': 'Año', 'Índice de Algo': 'Valor'})
    fig.update_yaxes(range=[80, 100])

    # Save figure to HTML
    buffer = io.StringIO()
    fig.write_html(buffer)
    html_bytes = buffer.getvalue().encode()
    encoded = b64encode(html_bytes).decode()

    href_data = f"data:text/html;base64,{encoded}"
    return fig, href_data

if __name__ == '__main__':
    app.run_server(debug=True)