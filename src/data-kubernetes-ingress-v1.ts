// https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesIngressV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html#metadata DataKubernetesIngressV1#metadata}
  */
  readonly metadata: DataKubernetesIngressV1Metadata;
}
export class DataKubernetesIngressV1SpecDefaultBackendResource extends cdktf.ComplexComputedList {

  // api_group - computed: true, optional: false, required: false
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataKubernetesIngressV1SpecDefaultBackendServicePort extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }
}
export class DataKubernetesIngressV1SpecDefaultBackendService extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port') as any;
  }
}
export class DataKubernetesIngressV1SpecDefaultBackend extends cdktf.ComplexComputedList {

  // resource - computed: true, optional: false, required: false
  public get resource() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource') as any;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service') as any;
  }
}
export class DataKubernetesIngressV1SpecRuleHttpPathBackendResource extends cdktf.ComplexComputedList {

  // api_group - computed: true, optional: false, required: false
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataKubernetesIngressV1SpecRuleHttpPathBackendServicePort extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getNumberAttribute('name');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }
}
export class DataKubernetesIngressV1SpecRuleHttpPathBackendService extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port') as any;
  }
}
export class DataKubernetesIngressV1SpecRuleHttpPathBackend extends cdktf.ComplexComputedList {

  // resource - computed: true, optional: false, required: false
  public get resource() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource') as any;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service') as any;
  }
}
export class DataKubernetesIngressV1SpecRuleHttpPath extends cdktf.ComplexComputedList {

  // backend - computed: true, optional: false, required: false
  public get backend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_type - computed: true, optional: false, required: false
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
}
export class DataKubernetesIngressV1SpecRuleHttp extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('path') as any;
  }
}
export class DataKubernetesIngressV1SpecRule extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http') as any;
  }
}
export class DataKubernetesIngressV1SpecTls extends cdktf.ComplexComputedList {

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export class DataKubernetesIngressV1Spec extends cdktf.ComplexComputedList {

  // default_backend - computed: true, optional: false, required: false
  public get defaultBackend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('default_backend') as any;
  }

  // ingress_class_name - computed: true, optional: false, required: false
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tls') as any;
  }
}
export class DataKubernetesIngressV1StatusLoadBalancerIngress extends cdktf.ComplexComputedList {

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesIngressV1StatusLoadBalancer extends cdktf.ComplexComputedList {

  // ingress - computed: true, optional: false, required: false
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
}
export class DataKubernetesIngressV1Status extends cdktf.ComplexComputedList {

  // load_balancer - computed: true, optional: false, required: false
  public get loadBalancer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('load_balancer') as any;
  }
}
export interface DataKubernetesIngressV1Metadata {
  /**
  * An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html#annotations DataKubernetesIngressV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html#labels DataKubernetesIngressV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html#name DataKubernetesIngressV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the ingress must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html#namespace DataKubernetesIngressV1#namespace}
  */
  readonly namespace?: string;
}

function dataKubernetesIngressV1MetadataToTerraform(struct?: DataKubernetesIngressV1MetadataOutputReference | DataKubernetesIngressV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataKubernetesIngressV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html kubernetes_ingress_v1}
*/
export class DataKubernetesIngressV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_ingress_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress_v1.html kubernetes_ingress_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesIngressV1Config
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesIngressV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_ingress_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // spec - computed: true, optional: false, required: false
  public spec(index: string) {
    return new DataKubernetesIngressV1Spec(this, 'spec', index);
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new DataKubernetesIngressV1Status(this, 'status', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: DataKubernetesIngressV1Metadata; 
  private __metadataOutput = new DataKubernetesIngressV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: DataKubernetesIngressV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataKubernetesIngressV1MetadataToTerraform(this._metadata),
    };
  }
}
