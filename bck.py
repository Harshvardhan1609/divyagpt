from openai import OpenAI
from graphviz import Digraph
from fpdf import FPDF
import speech_recognition as sr 
import streamlit as st
import os
api=os.environ.get("API")

def speech_to_text():
    mic=sr.Recognizer()
    with sr.Microphone() as mi:
        print("listening......")
        aud=mic.listen(mi,timeout=1)
        print("recognising......")
        # mic.energy_threshold()
        tex=mic.recognize_google(aud,language="en-in")
        return str(tex)
def integration(query,api=api):
    mod=OpenAI(api_key=api)
    res=mod.chat.completions.create(
        model="ft:gpt-3.5-turbo-0613:personal-mayank-gupta::8aLj3cul",
        messages=[{"role":"system","content":""" You have to generate  according to input"""}
        ,{"role":"user","content":f"{str(query)}"}]
    )
    return res.choices[0].message.content
# alp="""In stark contrast to other Rajput rulers who accommodated and formed alliances with the various Muslim dynasties in the subcontinent, by the time Pratap ascended to the throne, Mewar was going through a long-standing conflict with the Mughals which started with the defeat of his grandfather Rana Sanga in the Battle of Khanwa in 1527 and continued with the defeat of his father Udai Singh II in Siege of Chittorgarh in 1568.[14] Pratap Singh, gained distinction for his refusal to form any political alliance with the Mughal Empire and his resistance to Muslim domination. The conflicts between Pratap Singh and Akbar led to the"""
# alp=speech_to_text()
def create(alp):
    title=integration(query=f"""{alp}'plz create a title for it'""")
    # print(md)
    overview=integration(query=f"""{alp}'plz create a overview for it'""")
    summary=integration(query=f"""{alp}'plz create a summary for it'""")
    glossary=integration(query=f"""{alp}'plz create a glossary for it'""")
    qna=integration(query=f"""{alp}'plz create a Question and answers for it'""")
    flow_char(title=title,over=overview,out=f"static/{title}")
    text_to_pdf(title=title,overview=overview,output_fl_name=f"static/{title}.pdf",summary=summary,glossary=glossary,qna=qna)
    return title,overview,summary,glossary,qna
def text_to_pdf(title,summary,overview,glossary,output_fl_name,qna):
    
    pdf=FPDF()
    pdf.add_page(orientation="portrait")
    pdf.set_font(family="Arial",size=20)
    # pdf.set_xy(50,2)
    pdf.multi_cell(0,10,title)
    pdf.set_font(family="Arial",size=15)
    pdf.multi_cell(0,10,"Summary")
    pdf.set_font(family="Arial",size=10)
    pdf.multi_cell(0,10,summary)
    pdf.set_font(family="Arial",size=15)
    pdf.multi_cell(0,10,"Overview")
    pdf.set_font(family="Arial",size=10)
    pdf.multi_cell(0,10,overview)
    pdf.set_font(family="Arial",size=15)
    pdf.multi_cell(0,10,"Glossary")
    pdf.set_font(family="Arial",size=10)
    pdf.multi_cell(0,10,glossary)
    pdf.set_font(family="Arial",size=15)
    pdf.multi_cell(0,10,"Questions and answers")
    pdf.set_font(family="Arial",size=10)
    pdf.multi_cell(0,10,qna)
    # pdf.image(image,x=0,y=t_len-60,w=200,h=100)
    pdf.output(output_fl_name)
    return overview
def flow_char(title,over,out):
    graph = Digraph()
    # Nodes ko add karein
    graph.node(name=title,style="filled",color="cyan")
    for j in over.split(","):
        graph.node(name=j[:80],style="filled",color="green")
    for j in over.split(","):
        graph.edge(title,j[:80])
    # Graph ko visualize karein aur save karein
    graph.render(out, format='png', cleanup=True)