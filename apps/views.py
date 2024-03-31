from django.shortcuts import render
# from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from bck import create
# Create your views here.
def index(request):
    return render(request=request,template_name="index.html")
@csrf_exempt
def process(request):
    if request.method=="POST":
        name=request.POST.get("name")
        email=request.POST.get("email")
        message=request.POST.get("message")
        title,summary,overview,glossary,qna=create(message)
        print(title,summary,overview,glossary)
    return render(request=request,template_name="result.html",context={"title":title,"summary":summary,"overview":overview,"qna":qna,"img":f"/static/{str(title)}.png","pdf":f"/static/{str(title)}.pdf"})