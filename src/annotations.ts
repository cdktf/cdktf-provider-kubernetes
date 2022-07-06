// https://www.terraform.io/docs/providers/kubernetes/r/annotations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnnotationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of annotations to apply to the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#annotations Annotations#annotations}
  */
  readonly annotations: { [key: string]: string };
  /**
  * The apiVersion of the resource to annotate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#api_version Annotations#api_version}
  */
  readonly apiVersion: string;
  /**
  * Force overwriting annotations that were created or edited outside of Terraform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#force Annotations#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#id Annotations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The kind of the resource to annotate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#kind Annotations#kind}
  */
  readonly kind: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#metadata Annotations#metadata}
  */
  readonly metadata: AnnotationsMetadata;
}
export interface AnnotationsMetadata {
  /**
  * The name of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#name Annotations#name}
  */
  readonly name: string;
  /**
  * The namespace of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations#namespace Annotations#namespace}
  */
  readonly namespace?: string;
}

export function annotationsMetadataToTerraform(struct?: AnnotationsMetadataOutputReference | AnnotationsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class AnnotationsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AnnotationsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AnnotationsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations kubernetes_annotations}
*/
export class Annotations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_annotations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/annotations kubernetes_annotations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnnotationsConfig
  */
  public constructor(scope: Construct, id: string, config: AnnotationsConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_annotations',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.12.1',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._annotations = config.annotations;
    this._apiVersion = config.apiVersion;
    this._force = config.force;
    this._id = config.id;
    this._kind = config.kind;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: false, required: true
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new AnnotationsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AnnotationsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      metadata: annotationsMetadataToTerraform(this._metadata.internalValue),
    };
  }
}
