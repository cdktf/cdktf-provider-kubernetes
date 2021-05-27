// https://www.terraform.io/docs/providers/kubernetes/r/ingress.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#wait_for_load_balancer Ingress#wait_for_load_balancer}
  */
  readonly waitForLoadBalancer?: boolean;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#metadata Ingress#metadata}
  */
  readonly metadata: IngressMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#spec Ingress#spec}
  */
  readonly spec: IngressSpec[];
}
export class IngressStatusLoadBalancerIngress extends cdktf.ComplexComputedList {

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class IngressStatusLoadBalancer extends cdktf.ComplexComputedList {

  // ingress - computed: true, optional: false, required: false
  public get ingress() {
    return this.interpolationForAttribute('ingress') as any;
  }
}
export class IngressStatus extends cdktf.ComplexComputedList {

  // load_balancer - computed: true, optional: false, required: false
  public get loadBalancer() {
    return this.interpolationForAttribute('load_balancer') as any;
  }
}
export interface IngressMetadata {
  /**
  * An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#annotations Ingress#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#generate_name Ingress#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#labels Ingress#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#name Ingress#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the ingress must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#namespace Ingress#namespace}
  */
  readonly namespace?: string;
}

function ingressMetadataToTerraform(struct?: IngressMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface IngressSpecBackend {
  /**
  * Specifies the name of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#service_name Ingress#service_name}
  */
  readonly serviceName?: string;
  /**
  * Specifies the port of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#service_port Ingress#service_port}
  */
  readonly servicePort?: string;
}

function ingressSpecBackendToTerraform(struct?: IngressSpecBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.stringToTerraform(struct!.servicePort),
  }
}

export interface IngressSpecRuleHttpPathBackend {
  /**
  * Specifies the name of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#service_name Ingress#service_name}
  */
  readonly serviceName?: string;
  /**
  * Specifies the port of the referenced service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#service_port Ingress#service_port}
  */
  readonly servicePort?: string;
}

function ingressSpecRuleHttpPathBackendToTerraform(struct?: IngressSpecRuleHttpPathBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.stringToTerraform(struct!.servicePort),
  }
}

export interface IngressSpecRuleHttpPath {
  /**
  * Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. When unspecified, all paths from incoming requests are matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#path Ingress#path}
  */
  readonly path?: string;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#backend Ingress#backend}
  */
  readonly backend?: IngressSpecRuleHttpPathBackend[];
}

function ingressSpecRuleHttpPathToTerraform(struct?: IngressSpecRuleHttpPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    backend: cdktf.listMapper(ingressSpecRuleHttpPathBackendToTerraform)(struct!.backend),
  }
}

export interface IngressSpecRuleHttp {
  /**
  * path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#path Ingress#path}
  */
  readonly path: IngressSpecRuleHttpPath[];
}

function ingressSpecRuleHttpToTerraform(struct?: IngressSpecRuleHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.listMapper(ingressSpecRuleHttpPathToTerraform)(struct!.path),
  }
}

export interface IngressSpecRule {
  /**
  * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
   the IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
	  Currently the port of an Ingress is implicitly :80 for http and
	  :443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.

Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#host Ingress#host}
  */
  readonly host?: string;
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#http Ingress#http}
  */
  readonly http: IngressSpecRuleHttp[];
}

function ingressSpecRuleToTerraform(struct?: IngressSpecRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http: cdktf.listMapper(ingressSpecRuleHttpToTerraform)(struct!.http),
  }
}

export interface IngressSpecTls {
  /**
  * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#hosts Ingress#hosts}
  */
  readonly hosts?: string[];
  /**
  * SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#secret_name Ingress#secret_name}
  */
  readonly secretName?: string;
}

function ingressSpecTlsToTerraform(struct?: IngressSpecTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hosts),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface IngressSpec {
  /**
  * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#ingress_class_name Ingress#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#backend Ingress#backend}
  */
  readonly backend?: IngressSpecBackend[];
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#rule Ingress#rule}
  */
  readonly rule?: IngressSpecRule[];
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html#tls Ingress#tls}
  */
  readonly tls?: IngressSpecTls[];
}

function ingressSpecToTerraform(struct?: IngressSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    backend: cdktf.listMapper(ingressSpecBackendToTerraform)(struct!.backend),
    rule: cdktf.listMapper(ingressSpecRuleToTerraform)(struct!.rule),
    tls: cdktf.listMapper(ingressSpecTlsToTerraform)(struct!.tls),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html kubernetes_ingress}
*/
export class Ingress extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress.html kubernetes_ingress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IngressConfig
  */
  public constructor(scope: Construct, id: string, config: IngressConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_ingress',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitForLoadBalancer = config.waitForLoadBalancer;
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new IngressStatus(this, 'status', index);
  }

  // wait_for_load_balancer - computed: false, optional: true, required: false
  private _waitForLoadBalancer?: boolean;
  public get waitForLoadBalancer() {
    return this.getBooleanAttribute('wait_for_load_balancer');
  }
  public set waitForLoadBalancer(value: boolean ) {
    this._waitForLoadBalancer = value;
  }
  public resetWaitForLoadBalancer() {
    this._waitForLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForLoadBalancerInput() {
    return this._waitForLoadBalancer
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: IngressMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: IngressMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: IngressSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: IngressSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_for_load_balancer: cdktf.booleanToTerraform(this._waitForLoadBalancer),
      metadata: cdktf.listMapper(ingressMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(ingressSpecToTerraform)(this._spec),
    };
  }
}
