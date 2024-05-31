import pdfkit
import jinja2
import os

#DIRECTORIO DE TEMPLATE
template_dir = os.path.dirname(os.path.abspath(__file__))
#CONFIGURACION JINJA
template_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir))

#CONFIGURACION PDFKIT
config = pdfkit.configuration(wkhtmltopdf="/usr/bin/wkhtmltopdf")

def createfirstpdf(suppliers_list):
    #VARIABLE DE RESTAURANTES (PROVEEDORES)
    all_suppliers_info = []  
    for suppliers in suppliers_list:
        nombre = suppliers.nombre
        img = suppliers.img
        direccion = suppliers.direccion
        web = suppliers.web
        descripcion = suppliers.descripcion
        supplier_info = {'nombre': nombre, 'img': img, 'direccion': direccion,'web': web, 'descripcion': descripcion}

        all_suppliers_info.append(supplier_info)
    #######################################   
    template = template_env.get_template('template.html')

    output_text = ""
    output_text = template.render({"restaurantes": all_suppliers_info})

    output_pdf = '/home/cucho/Programacion/proyecto-cngtool/backend-cng/app/pdfgeneration/saved_pdf/all_suppliers.pdf'

    pdfkit.from_string(output_text, output_pdf, configuration=config)

    return output_pdf



