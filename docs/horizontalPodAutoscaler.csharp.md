# `horizontalPodAutoscaler` Submodule <a name="`horizontalPodAutoscaler` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscaler <a name="HorizontalPodAutoscaler" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler kubernetes_horizontal_pod_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscaler(Construct Scope, string Id, HorizontalPodAutoscalerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig">HorizontalPodAutoscalerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig">HorizontalPodAutoscalerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putMetadata"></a>

```csharp
private void PutMetadata(HorizontalPodAutoscalerMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putSpec"></a>

```csharp
private void PutSpec(HorizontalPodAutoscalerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HorizontalPodAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

HorizontalPodAutoscaler.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

HorizontalPodAutoscaler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

HorizontalPodAutoscaler.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

HorizontalPodAutoscaler.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HorizontalPodAutoscaler resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HorizontalPodAutoscaler to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HorizontalPodAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HorizontalPodAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference">HorizontalPodAutoscalerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference">HorizontalPodAutoscalerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadata"></a>

```csharp
public HorizontalPodAutoscalerMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference">HorizontalPodAutoscalerMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.spec"></a>

```csharp
public HorizontalPodAutoscalerSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference">HorizontalPodAutoscalerSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadataInput"></a>

```csharp
public HorizontalPodAutoscalerMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.specInput"></a>

```csharp
public HorizontalPodAutoscalerSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerConfig <a name="HorizontalPodAutoscalerConfig" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    HorizontalPodAutoscalerMetadata Metadata,
    HorizontalPodAutoscalerSpec Spec,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#id HorizontalPodAutoscaler#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.metadata"></a>

```csharp
public HorizontalPodAutoscalerMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#metadata HorizontalPodAutoscaler#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.spec"></a>

```csharp
public HorizontalPodAutoscalerSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#spec HorizontalPodAutoscaler#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#id HorizontalPodAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerMetadata <a name="HorizontalPodAutoscalerMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.name">Name</a></code> | <code>string</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#annotations HorizontalPodAutoscaler#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#generate_name HorizontalPodAutoscaler#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#labels HorizontalPodAutoscaler#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#namespace HorizontalPodAutoscaler#namespace}

---

### HorizontalPodAutoscalerSpec <a name="HorizontalPodAutoscalerSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpec {
    double MaxReplicas,
    HorizontalPodAutoscalerSpecScaleTargetRef ScaleTargetRef,
    HorizontalPodAutoscalerSpecBehavior Behavior = null,
    object Metric = null,
    double MinReplicas = null,
    double TargetCpuUtilizationPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.behavior">Behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a></code> | behavior block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.metric">Metric</a></code> | <code>object</code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.minReplicas">MinReplicas</a></code> | <code>double</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>double</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; set; }
```

- *Type:* double

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#max_replicas HorizontalPodAutoscaler#max_replicas}

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.scaleTargetRef"></a>

```csharp
public HorizontalPodAutoscalerSpecScaleTargetRef ScaleTargetRef { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#scale_target_ref HorizontalPodAutoscaler#scale_target_ref}

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.behavior"></a>

```csharp
public HorizontalPodAutoscalerSpecBehavior Behavior { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#behavior HorizontalPodAutoscaler#behavior}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.metric"></a>

```csharp
public object Metric { get; set; }
```

- *Type:* object

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `MinReplicas`<sup>Optional</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.minReplicas"></a>

```csharp
public double MinReplicas { get; set; }
```

- *Type:* double

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#min_replicas HorizontalPodAutoscaler#min_replicas}

---

##### `TargetCpuUtilizationPercentage`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.targetCpuUtilizationPercentage"></a>

```csharp
public double TargetCpuUtilizationPercentage { get; set; }
```

- *Type:* double

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#target_cpu_utilization_percentage HorizontalPodAutoscaler#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerSpecBehavior <a name="HorizontalPodAutoscalerSpecBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehavior {
    object ScaleDown = null,
    object ScaleUp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleDown">ScaleDown</a></code> | <code>object</code> | scale_down block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleUp">ScaleUp</a></code> | <code>object</code> | scale_up block. |

---

##### `ScaleDown`<sup>Optional</sup> <a name="ScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleDown"></a>

```csharp
public object ScaleDown { get; set; }
```

- *Type:* object

scale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#scale_down HorizontalPodAutoscaler#scale_down}

---

##### `ScaleUp`<sup>Optional</sup> <a name="ScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleUp"></a>

```csharp
public object ScaleUp { get; set; }
```

- *Type:* object

scale_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#scale_up HorizontalPodAutoscaler#scale_up}

---

### HorizontalPodAutoscalerSpecBehaviorScaleDown <a name="HorizontalPodAutoscalerSpecBehaviorScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleDown {
    object Policy,
    string SelectPolicy = null,
    double StabilizationWindowSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.policy">Policy</a></code> | <code>object</code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.policy"></a>

```csharp
public object Policy { get; set; }
```

- *Type:* object

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}

---

##### `SelectPolicy`<sup>Optional</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; set; }
```

- *Type:* string

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}

---

##### `StabilizationWindowSeconds`<sup>Optional</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; set; }
```

- *Type:* double

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}

---

### HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy {
    double PeriodSeconds,
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.type">Type</a></code> | <code>string</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.value">Value</a></code> | <code>double</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecBehaviorScaleUp <a name="HorizontalPodAutoscalerSpecBehaviorScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleUp {
    object Policy,
    string SelectPolicy = null,
    double StabilizationWindowSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.policy">Policy</a></code> | <code>object</code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.policy"></a>

```csharp
public object Policy { get; set; }
```

- *Type:* object

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}

---

##### `SelectPolicy`<sup>Optional</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; set; }
```

- *Type:* string

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}

---

##### `StabilizationWindowSeconds`<sup>Optional</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; set; }
```

- *Type:* double

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}

---

### HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy {
    double PeriodSeconds,
    string Type,
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.type">Type</a></code> | <code>string</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.value">Value</a></code> | <code>double</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; set; }
```

- *Type:* double

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetric <a name="HorizontalPodAutoscalerSpecMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetric {
    string Type,
    HorizontalPodAutoscalerSpecMetricContainerResource ContainerResource = null,
    HorizontalPodAutoscalerSpecMetricExternal External = null,
    HorizontalPodAutoscalerSpecMetricObject Object = null,
    HorizontalPodAutoscalerSpecMetricPods Pods = null,
    HorizontalPodAutoscalerSpecMetricResource Resource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.type">Type</a></code> | <code>string</code> | type is the type of metric source. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.containerResource">ContainerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a></code> | container_resource block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.external">External</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a></code> | external block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.object">Object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a></code> | object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.pods">Pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a></code> | pods block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a></code> | resource block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type is the type of metric source.

It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `ContainerResource`<sup>Optional</sup> <a name="ContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.containerResource"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResource ContainerResource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

container_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#container_resource HorizontalPodAutoscaler#container_resource}

---

##### `External`<sup>Optional</sup> <a name="External" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.external"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternal External { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

external block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#external HorizontalPodAutoscaler#external}

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.object"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObject Object { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#object HorizontalPodAutoscaler#object}

---

##### `Pods`<sup>Optional</sup> <a name="Pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.pods"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPods Pods { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

pods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#pods HorizontalPodAutoscaler#pods}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.resource"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResource Resource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#resource HorizontalPodAutoscaler#resource}

---

### HorizontalPodAutoscalerSpecMetricContainerResource <a name="HorizontalPodAutoscalerSpecMetricContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricContainerResource {
    string Container,
    string Name,
    HorizontalPodAutoscalerSpecMetricContainerResourceTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.container">Container</a></code> | <code>string</code> | name of the container in the pods of the scaling target. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.name">Name</a></code> | <code>string</code> | name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a></code> | target block. |

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

name of the container in the pods of the scaling target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#container HorizontalPodAutoscaler#container}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name of the resource in question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResourceTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricContainerResourceTarget <a name="HorizontalPodAutoscalerSpecMetricContainerResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricContainerResourceTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricExternal <a name="HorizontalPodAutoscalerSpecMetricExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternal {
    HorizontalPodAutoscalerSpecMetricExternalMetric Metric,
    HorizontalPodAutoscalerSpecMetricExternalTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a></code> | target block. |

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.metric"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricExternalMetric <a name="HorizontalPodAutoscalerSpecMetricExternalMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetric {
    string Name,
    object Selector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.name">Name</a></code> | <code>string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.selector">Selector</a></code> | <code>object</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.selector"></a>

```csharp
public object Selector { get; set; }
```

- *Type:* object

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}

---

### HorizontalPodAutoscalerSpecMetricExternalMetricSelector <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}

---

### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}

---

### HorizontalPodAutoscalerSpecMetricExternalTarget <a name="HorizontalPodAutoscalerSpecMetricExternalTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricObject <a name="HorizontalPodAutoscalerSpecMetricObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObject {
    HorizontalPodAutoscalerSpecMetricObjectDescribedObject DescribedObject,
    HorizontalPodAutoscalerSpecMetricObjectMetric Metric,
    HorizontalPodAutoscalerSpecMetricObjectTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.describedObject">DescribedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a></code> | described_object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a></code> | target block. |

---

##### `DescribedObject`<sup>Required</sup> <a name="DescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.describedObject"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectDescribedObject DescribedObject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

described_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#described_object HorizontalPodAutoscaler#described_object}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.metric"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricObjectDescribedObject <a name="HorizontalPodAutoscalerSpecMetricObjectDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectDescribedObject {
    string ApiVersion,
    string Kind,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.apiVersion">ApiVersion</a></code> | <code>string</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.kind">Kind</a></code> | <code>string</code> | Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.name">Name</a></code> | <code>string</code> | Name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

### HorizontalPodAutoscalerSpecMetricObjectMetric <a name="HorizontalPodAutoscalerSpecMetricObjectMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetric {
    string Name,
    object Selector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.name">Name</a></code> | <code>string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.selector">Selector</a></code> | <code>object</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.selector"></a>

```csharp
public object Selector { get; set; }
```

- *Type:* object

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}

---

### HorizontalPodAutoscalerSpecMetricObjectMetricSelector <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}

---

### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}

---

### HorizontalPodAutoscalerSpecMetricObjectTarget <a name="HorizontalPodAutoscalerSpecMetricObjectTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricPods <a name="HorizontalPodAutoscalerSpecMetricPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPods {
    HorizontalPodAutoscalerSpecMetricPodsMetric Metric,
    HorizontalPodAutoscalerSpecMetricPodsTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a></code> | target block. |

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.metric"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricPodsMetric <a name="HorizontalPodAutoscalerSpecMetricPodsMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetric {
    string Name,
    object Selector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.name">Name</a></code> | <code>string</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.selector">Selector</a></code> | <code>object</code> | selector block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.selector"></a>

```csharp
public object Selector { get; set; }
```

- *Type:* object

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}

---

### HorizontalPodAutoscalerSpecMetricPodsMetricSelector <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}

---

### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}

---

### HorizontalPodAutoscalerSpecMetricPodsTarget <a name="HorizontalPodAutoscalerSpecMetricPodsTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricResource <a name="HorizontalPodAutoscalerSpecMetricResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricResource {
    string Name,
    HorizontalPodAutoscalerSpecMetricResourceTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.name">Name</a></code> | <code>string</code> | name is the name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a></code> | target block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

name is the name of the resource in question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResourceTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricResourceTarget <a name="HorizontalPodAutoscalerSpecMetricResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricResourceTarget {
    string Type,
    double AverageUtilization = null,
    string AverageValue = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.type">Type</a></code> | <code>string</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageValue">AverageValue</a></code> | <code>string</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.value">Value</a></code> | <code>string</code> | value is the target value of the metric (as a quantity). |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `AverageUtilization`<sup>Optional</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; set; }
```

- *Type:* double

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `AverageValue`<sup>Optional</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageValue"></a>

```csharp
public string AverageValue { get; set; }
```

- *Type:* string

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecScaleTargetRef <a name="HorizontalPodAutoscalerSpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecScaleTargetRef {
    string Kind,
    string Name,
    string ApiVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.kind">Kind</a></code> | <code>string</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.apiVersion">ApiVersion</a></code> | <code>string</code> | API version of the referent. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerMetadataOutputReference <a name="HorizontalPodAutoscalerMetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

---


### HorizontalPodAutoscalerSpecBehaviorOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleDown">PutScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleUp">PutScaleUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleDown">ResetScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleUp">ResetScaleUp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleDown` <a name="PutScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleDown"></a>

```csharp
private void PutScaleDown(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleDown.parameter.value"></a>

- *Type:* object

---

##### `PutScaleUp` <a name="PutScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleUp"></a>

```csharp
private void PutScaleUp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleUp.parameter.value"></a>

- *Type:* object

---

##### `ResetScaleDown` <a name="ResetScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleDown"></a>

```csharp
private void ResetScaleDown()
```

##### `ResetScaleUp` <a name="ResetScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleUp"></a>

```csharp
private void ResetScaleUp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDown">ScaleDown</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList">HorizontalPodAutoscalerSpecBehaviorScaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUp">ScaleUp</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList">HorizontalPodAutoscalerSpecBehaviorScaleUpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDownInput">ScaleDownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUpInput">ScaleUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleDown`<sup>Required</sup> <a name="ScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDown"></a>

```csharp
public HorizontalPodAutoscalerSpecBehaviorScaleDownList ScaleDown { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList">HorizontalPodAutoscalerSpecBehaviorScaleDownList</a>

---

##### `ScaleUp`<sup>Required</sup> <a name="ScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUp"></a>

```csharp
public HorizontalPodAutoscalerSpecBehaviorScaleUpList ScaleUp { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList">HorizontalPodAutoscalerSpecBehaviorScaleUpList</a>

---

##### `ScaleDownInput`<sup>Optional</sup> <a name="ScaleDownInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDownInput"></a>

```csharp
public object ScaleDownInput { get; }
```

- *Type:* object

---

##### `ScaleUpInput`<sup>Optional</sup> <a name="ScaleUpInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUpInput"></a>

```csharp
public object ScaleUpInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecBehavior InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownList <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleDownList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetSelectPolicy">ResetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds">ResetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.putPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetSelectPolicy` <a name="ResetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetSelectPolicy"></a>

```csharp
private void ResetSelectPolicy()
```

##### `ResetStabilizationWindowSeconds` <a name="ResetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds"></a>

```csharp
private void ResetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policyInput">PolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicyInput">SelectPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput">StabilizationWindowSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policy"></a>

```csharp
public HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policyInput"></a>

```csharp
public object PolicyInput { get; }
```

- *Type:* object

---

##### `SelectPolicyInput`<sup>Optional</sup> <a name="SelectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicyInput"></a>

```csharp
public string SelectPolicyInput { get; }
```

- *Type:* string

---

##### `StabilizationWindowSecondsInput`<sup>Optional</sup> <a name="StabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput"></a>

```csharp
public double StabilizationWindowSecondsInput { get; }
```

- *Type:* double

---

##### `SelectPolicy`<sup>Required</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; }
```

- *Type:* string

---

##### `StabilizationWindowSeconds`<sup>Required</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpList <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleUpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetSelectPolicy">ResetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds">ResetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.putPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetSelectPolicy` <a name="ResetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetSelectPolicy"></a>

```csharp
private void ResetSelectPolicy()
```

##### `ResetStabilizationWindowSeconds` <a name="ResetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds"></a>

```csharp
private void ResetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policyInput">PolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicyInput">SelectPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput">StabilizationWindowSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicy">SelectPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds">StabilizationWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policy"></a>

```csharp
public HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policyInput"></a>

```csharp
public object PolicyInput { get; }
```

- *Type:* object

---

##### `SelectPolicyInput`<sup>Optional</sup> <a name="SelectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicyInput"></a>

```csharp
public string SelectPolicyInput { get; }
```

- *Type:* string

---

##### `StabilizationWindowSecondsInput`<sup>Optional</sup> <a name="StabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput"></a>

```csharp
public double StabilizationWindowSecondsInput { get; }
```

- *Type:* double

---

##### `SelectPolicy`<sup>Required</sup> <a name="SelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicy"></a>

```csharp
public string SelectPolicy { get; }
```

- *Type:* string

---

##### `StabilizationWindowSeconds`<sup>Required</sup> <a name="StabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds"></a>

```csharp
public double StabilizationWindowSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput"></a>

```csharp
public double PeriodSecondsInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds"></a>

```csharp
public double PeriodSeconds { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference <a name="HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerSpecMetricContainerResourceTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResourceTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

---


### HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResourceTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

---


### HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.putSelector"></a>

```csharp
private void PutSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selector"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selectorInput"></a>

```csharp
public object SelectorInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressions"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricExternalOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putMetric"></a>

```csharp
private void PutMetric(HorizontalPodAutoscalerSpecMetricExternalMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerSpecMetricExternalTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metricInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

---


### HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

---


### HorizontalPodAutoscalerSpecMetricList <a name="HorizontalPodAutoscalerSpecMetricList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecMetricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectDescribedObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

---


### HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.putSelector"></a>

```csharp
private void PutSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selector"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selectorInput"></a>

```csharp
public object SelectorInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressions"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricObjectOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putDescribedObject">PutDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDescribedObject` <a name="PutDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putDescribedObject"></a>

```csharp
private void PutDescribedObject(HorizontalPodAutoscalerSpecMetricObjectDescribedObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putDescribedObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putMetric"></a>

```csharp
private void PutMetric(HorizontalPodAutoscalerSpecMetricObjectMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerSpecMetricObjectTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObject">DescribedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObjectInput">DescribedObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribedObject`<sup>Required</sup> <a name="DescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObject"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference DescribedObject { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference</a>

---

##### `DescribedObjectInput`<sup>Optional</sup> <a name="DescribedObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObjectInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectDescribedObject DescribedObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metricInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

---


### HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

---


### HorizontalPodAutoscalerSpecMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putContainerResource">PutContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putExternal">PutExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putObject">PutObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putPods">PutPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetContainerResource">ResetContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetExternal">ResetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetPods">ResetPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerResource` <a name="PutContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putContainerResource"></a>

```csharp
private void PutContainerResource(HorizontalPodAutoscalerSpecMetricContainerResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putContainerResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

---

##### `PutExternal` <a name="PutExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putExternal"></a>

```csharp
private void PutExternal(HorizontalPodAutoscalerSpecMetricExternal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putExternal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

---

##### `PutObject` <a name="PutObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putObject"></a>

```csharp
private void PutObject(HorizontalPodAutoscalerSpecMetricObject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

---

##### `PutPods` <a name="PutPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putPods"></a>

```csharp
private void PutPods(HorizontalPodAutoscalerSpecMetricPods Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putPods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

---

##### `PutResource` <a name="PutResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putResource"></a>

```csharp
private void PutResource(HorizontalPodAutoscalerSpecMetricResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

---

##### `ResetContainerResource` <a name="ResetContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetContainerResource"></a>

```csharp
private void ResetContainerResource()
```

##### `ResetExternal` <a name="ResetExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetExternal"></a>

```csharp
private void ResetExternal()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetObject"></a>

```csharp
private void ResetObject()
```

##### `ResetPods` <a name="ResetPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetPods"></a>

```csharp
private void ResetPods()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResource">ContainerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.external">External</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference">HorizontalPodAutoscalerSpecMetricExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.object">Object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.pods">Pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference">HorizontalPodAutoscalerSpecMetricPodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference">HorizontalPodAutoscalerSpecMetricResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResourceInput">ContainerResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.externalInput">ExternalInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.objectInput">ObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.podsInput">PodsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resourceInput">ResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerResource`<sup>Required</sup> <a name="ContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResource"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference ContainerResource { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference</a>

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.external"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternalOutputReference External { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference">HorizontalPodAutoscalerSpecMetricExternalOutputReference</a>

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.object"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObjectOutputReference Object { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectOutputReference</a>

---

##### `Pods`<sup>Required</sup> <a name="Pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.pods"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsOutputReference Pods { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference">HorizontalPodAutoscalerSpecMetricPodsOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resource"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResourceOutputReference Resource { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference">HorizontalPodAutoscalerSpecMetricResourceOutputReference</a>

---

##### `ContainerResourceInput`<sup>Optional</sup> <a name="ContainerResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResourceInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricContainerResource ContainerResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

---

##### `ExternalInput`<sup>Optional</sup> <a name="ExternalInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.externalInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricExternal ExternalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.objectInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricObject ObjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

---

##### `PodsInput`<sup>Optional</sup> <a name="PodsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.podsInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPods PodsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resourceInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResource ResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.putSelector"></a>

```csharp
private void PutSelector(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* object

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selectorInput">SelectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selector"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selectorInput"></a>

```csharp
public object SelectorInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.get"></a>

```csharp
private HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressions"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HorizontalPodAutoscalerSpecMetricPodsOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putMetric"></a>

```csharp
private void PutMetric(HorizontalPodAutoscalerSpecMetricPodsMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerSpecMetricPodsTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metricInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPods InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

---


### HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricPodsTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

---


### HorizontalPodAutoscalerSpecMetricResourceOutputReference <a name="HorizontalPodAutoscalerSpecMetricResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.putTarget"></a>

```csharp
private void PutTarget(HorizontalPodAutoscalerSpecMetricResourceTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.target"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.targetInput"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResourceTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

---


### HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageUtilization">ResetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageValue">ResetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAverageUtilization` <a name="ResetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageUtilization"></a>

```csharp
private void ResetAverageUtilization()
```

##### `ResetAverageValue` <a name="ResetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageValue"></a>

```csharp
private void ResetAverageValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilizationInput">AverageUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValueInput">AverageValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilization">AverageUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValue">AverageValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AverageUtilizationInput`<sup>Optional</sup> <a name="AverageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilizationInput"></a>

```csharp
public double AverageUtilizationInput { get; }
```

- *Type:* double

---

##### `AverageValueInput`<sup>Optional</sup> <a name="AverageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValueInput"></a>

```csharp
public string AverageValueInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `AverageUtilization`<sup>Required</sup> <a name="AverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilization"></a>

```csharp
public double AverageUtilization { get; }
```

- *Type:* double

---

##### `AverageValue`<sup>Required</sup> <a name="AverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValue"></a>

```csharp
public string AverageValue { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricResourceTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

---


### HorizontalPodAutoscalerSpecOutputReference <a name="HorizontalPodAutoscalerSpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putBehavior">PutBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putScaleTargetRef">PutScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMinReplicas">ResetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetTargetCpuUtilizationPercentage">ResetTargetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBehavior` <a name="PutBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putBehavior"></a>

```csharp
private void PutBehavior(HorizontalPodAutoscalerSpecBehavior Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putMetric"></a>

```csharp
private void PutMetric(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putMetric.parameter.value"></a>

- *Type:* object

---

##### `PutScaleTargetRef` <a name="PutScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putScaleTargetRef"></a>

```csharp
private void PutScaleTargetRef(HorizontalPodAutoscalerSpecScaleTargetRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putScaleTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

---

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetBehavior"></a>

```csharp
private void ResetBehavior()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetMinReplicas` <a name="ResetMinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMinReplicas"></a>

```csharp
private void ResetMinReplicas()
```

##### `ResetTargetCpuUtilizationPercentage` <a name="ResetTargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```csharp
private void ResetTargetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behavior">Behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference">HorizontalPodAutoscalerSpecBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList">HorizontalPodAutoscalerSpecMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRef">ScaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference">HorizontalPodAutoscalerSpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metricInput">MetricInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRefInput">ScaleTargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentageInput">TargetCpuUtilizationPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicas">MinReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentage">TargetCpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behavior"></a>

```csharp
public HorizontalPodAutoscalerSpecBehaviorOutputReference Behavior { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference">HorizontalPodAutoscalerSpecBehaviorOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metric"></a>

```csharp
public HorizontalPodAutoscalerSpecMetricList Metric { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList">HorizontalPodAutoscalerSpecMetricList</a>

---

##### `ScaleTargetRef`<sup>Required</sup> <a name="ScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRef"></a>

```csharp
public HorizontalPodAutoscalerSpecScaleTargetRefOutputReference ScaleTargetRef { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference">HorizontalPodAutoscalerSpecScaleTargetRefOutputReference</a>

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behaviorInput"></a>

```csharp
public HorizontalPodAutoscalerSpecBehavior BehaviorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicasInput"></a>

```csharp
public double MaxReplicasInput { get; }
```

- *Type:* double

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metricInput"></a>

```csharp
public object MetricInput { get; }
```

- *Type:* object

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicasInput"></a>

```csharp
public double MinReplicasInput { get; }
```

- *Type:* double

---

##### `ScaleTargetRefInput`<sup>Optional</sup> <a name="ScaleTargetRefInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRefInput"></a>

```csharp
public HorizontalPodAutoscalerSpecScaleTargetRef ScaleTargetRefInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

---

##### `TargetCpuUtilizationPercentageInput`<sup>Optional</sup> <a name="TargetCpuUtilizationPercentageInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```csharp
public double TargetCpuUtilizationPercentageInput { get; }
```

- *Type:* double

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; }
```

- *Type:* double

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicas"></a>

```csharp
public double MinReplicas { get; }
```

- *Type:* double

---

##### `TargetCpuUtilizationPercentage`<sup>Required</sup> <a name="TargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```csharp
public double TargetCpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

---


### HorizontalPodAutoscalerSpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerSpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new HorizontalPodAutoscalerSpecScaleTargetRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resetApiVersion"></a>

```csharp
private void ResetApiVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.internalValue"></a>

```csharp
public HorizontalPodAutoscalerSpecScaleTargetRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

---



