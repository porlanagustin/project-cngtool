import pdfkit
import jinja2
import os

# DIRECTORIO DE TEMPLATE
template_dir = os.path.dirname(os.path.abspath(__file__))

# CONFIGURACION JINJA
try:
    template_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir))
except Exception as e:
    raise Exception(f"Error al configurar Jinja2 Environment: {e}")

# CONFIGURACION PDFKIT
try:
    config = pdfkit.configuration(wkhtmltopdf="/usr/bin/wkhtmltopdf")
except Exception as e:
    raise Exception(f"Error al configurar PDFKit: {e}")

def createfirstpdf(data_list):
    # VALIDAR ENTRADA
    if not isinstance(data_list, list):
        raise ValueError("La entrada debe ser una lista de proveedores")

    # VARIABLE DE RESTAURANTES (PROVEEDORES)
    all_suppliers_info = []
    try:
        for data in data_list:
            name = data.name
            img = data.img
            address = data.address
            web = data.web
            description = data.description
            restaurant_info = {
                'nombre': name, 
                'img': img, 
                'direccion': address, 
                'web': web, 
                'description': description
            }
            all_suppliers_info.append(restaurant_info)
    except AttributeError as e:
        raise AttributeError(f"Error al procesar la lista de proveedores: {e}")

    try:
        template = template_env.get_template('template.html')
    except jinja2.TemplateNotFound as e:
        raise Exception(f"Error: no se encontró el template: {e}")
    except jinja2.TemplateError as e:
        raise Exception(f"Error al cargar el template: {e}")

    try:
        output_text = template.render({"restaurantes": all_suppliers_info})
    except jinja2.TemplateError as e:
        raise Exception(f"Error al renderizar el template: {e}")

    output_pdf = '/home/cucho/Programacion/project-cngtool/backend-cng/app/pdfgeneration/saved_pdf/all_suppliers.pdf'

    try:
        pdfkit.from_string(output_text, output_pdf, configuration=config)
    except IOError as e:
        raise Exception(f"Error al generar el PDF: {e}")

    return output_pdf




