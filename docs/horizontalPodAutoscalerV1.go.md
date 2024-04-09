# `horizontalPodAutoscalerV1` Submodule <a name="`horizontalPodAutoscalerV1` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscalerV1 <a name="HorizontalPodAutoscalerV1" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1 kubernetes_horizontal_pod_autoscaler_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.NewHorizontalPodAutoscalerV1(scope Construct, id *string, config HorizontalPodAutoscalerV1Config) HorizontalPodAutoscalerV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config">HorizontalPodAutoscalerV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config">HorizontalPodAutoscalerV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata"></a>

```go
func PutMetadata(value HorizontalPodAutoscalerV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec"></a>

```go
func PutSpec(value HorizontalPodAutoscalerV1Spec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HorizontalPodAutoscalerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.HorizontalPodAutoscalerV1_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.HorizontalPodAutoscalerV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.HorizontalPodAutoscalerV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.HorizontalPodAutoscalerV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HorizontalPodAutoscalerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HorizontalPodAutoscalerV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HorizontalPodAutoscalerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HorizontalPodAutoscalerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference">HorizontalPodAutoscalerV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference">HorizontalPodAutoscalerV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadata"></a>

```go
func Metadata() HorizontalPodAutoscalerV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference">HorizontalPodAutoscalerV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.spec"></a>

```go
func Spec() HorizontalPodAutoscalerV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference">HorizontalPodAutoscalerV1SpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadataInput"></a>

```go
func MetadataInput() HorizontalPodAutoscalerV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.specInput"></a>

```go
func SpecInput() HorizontalPodAutoscalerV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerV1Config <a name="HorizontalPodAutoscalerV1Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

&horizontalpodautoscalerv1.HorizontalPodAutoscalerV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.metadata"></a>

```go
Metadata HorizontalPodAutoscalerV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#metadata HorizontalPodAutoscalerV1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.spec"></a>

```go
Spec HorizontalPodAutoscalerV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#spec HorizontalPodAutoscalerV1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerV1Metadata <a name="HorizontalPodAutoscalerV1Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

&horizontalpodautoscalerv1.HorizontalPodAutoscalerV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#annotations HorizontalPodAutoscalerV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#generate_name HorizontalPodAutoscalerV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#labels HorizontalPodAutoscalerV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#namespace HorizontalPodAutoscalerV1#namespace}

---

### HorizontalPodAutoscalerV1Spec <a name="HorizontalPodAutoscalerV1Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

&horizontalpodautoscalerv1.HorizontalPodAutoscalerV1Spec {
	MaxReplicas: *f64,
	ScaleTargetRef: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef,
	MinReplicas: *f64,
	TargetCpuUtilizationPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>*f64</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.maxReplicas"></a>

```go
MaxReplicas *f64
```

- *Type:* *f64

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#max_replicas HorizontalPodAutoscalerV1#max_replicas}

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.scaleTargetRef"></a>

```go
ScaleTargetRef HorizontalPodAutoscalerV1SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#scale_target_ref HorizontalPodAutoscalerV1#scale_target_ref}

---

##### `MinReplicas`<sup>Optional</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.minReplicas"></a>

```go
MinReplicas *f64
```

- *Type:* *f64

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#min_replicas HorizontalPodAutoscalerV1#min_replicas}

---

##### `TargetCpuUtilizationPercentage`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.targetCpuUtilizationPercentage"></a>

```go
TargetCpuUtilizationPercentage *f64
```

- *Type:* *f64

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#target_cpu_utilization_percentage HorizontalPodAutoscalerV1#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerV1SpecScaleTargetRef <a name="HorizontalPodAutoscalerV1SpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

&horizontalpodautoscalerv1.HorizontalPodAutoscalerV1SpecScaleTargetRef {
	Kind: *string,
	Name: *string,
	ApiVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.kind">Kind</a></code> | <code>*string</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.name">Name</a></code> | <code>*string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | API version of the referent. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#kind HorizontalPodAutoscalerV1#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/resources/horizontal_pod_autoscaler_v1#api_version HorizontalPodAutoscalerV1#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerV1MetadataOutputReference <a name="HorizontalPodAutoscalerV1MetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.NewHorizontalPodAutoscalerV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---


### HorizontalPodAutoscalerV1SpecOutputReference <a name="HorizontalPodAutoscalerV1SpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.NewHorizontalPodAutoscalerV1SpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV1SpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef">PutScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetMinReplicas">ResetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetTargetCpuUtilizationPercentage">ResetTargetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleTargetRef` <a name="PutScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef"></a>

```go
func PutScaleTargetRef(value HorizontalPodAutoscalerV1SpecScaleTargetRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---

##### `ResetMinReplicas` <a name="ResetMinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetMinReplicas"></a>

```go
func ResetMinReplicas()
```

##### `ResetTargetCpuUtilizationPercentage` <a name="ResetTargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```go
func ResetTargetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRefInput">ScaleTargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentageInput">TargetCpuUtilizationPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRef"></a>

```go
func ScaleTargetRef() HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicasInput"></a>

```go
func MaxReplicasInput() *f64
```

- *Type:* *f64

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicasInput"></a>

```go
func MinReplicasInput() *f64
```

- *Type:* *f64

---

##### `ScaleTargetRefInput`<sup>Optional</sup> <a name="ScaleTargetRefInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRefInput"></a>

```go
func ScaleTargetRefInput() HorizontalPodAutoscalerV1SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---

##### `TargetCpuUtilizationPercentageInput`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentageInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```go
func TargetCpuUtilizationPercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicas"></a>

```go
func MaxReplicas() *f64
```

- *Type:* *f64

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicas"></a>

```go
func MinReplicas() *f64
```

- *Type:* *f64

---

##### `TargetCpuUtilizationPercentage`<sup>Required</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```go
func TargetCpuUtilizationPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---


### HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/horizontalpodautoscalerv1"

horizontalpodautoscalerv1.NewHorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resetApiVersion"></a>

```go
func ResetApiVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```go
func ApiVersionInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersion"></a>

```go
func ApiVersion() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizontalPodAutoscalerV1SpecScaleTargetRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---



